<script lang="ts">
  import { getResumeData } from '$lib/data/resume';
  import { getLabels } from '$lib/data/labels';
  import type { PageData } from './$types';
  import Title from '$lib/components/Title.svelte';
  import Project from '$lib/components/Project.svelte';
  import SideList from '$lib/components/SideList.svelte';
  import Row from '$lib/components/Row.svelte';

  let { data }: { data: PageData } = $props();

  const resumeData = $derived(getResumeData(data.lang));
  const labels = $derived(getLabels(data.lang));

  const introduction = $derived(resumeData.introduction);
  const workExperiences = $derived(resumeData.workExperiences);
  const otherExperiences = $derived(resumeData.otherExperiences);
  const certificates = $derived(resumeData.certificates);
  const skills = $derived(resumeData.skills);
</script>

<article>
  <Title
    githubLink={introduction.githubLink}
    linkedinLink={introduction.linkedinLink}
    lang={data.lang}
    title={introduction.title}
  />

  <div class="content-wrapper">
    <div>
      {#each introduction.briefing as line, index (index)}
        <p>{line}</p>
      {/each}
    </div>

    <h2>{labels.workExperience}</h2>

    {#if workExperiences}
      {#each workExperiences as experience, experienceIndex (experienceIndex)}
        <Row
          companyName={experience.companyName}
          role={experience.role}
          dateFrom={experience.dateFrom}
          dateTo={experience.dateTo}
        >
          {#snippet additional()}
            {#if experience.additional}
              <a
                href={experience.additional.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={experience.additional.label}
                title={experience.additional.label}
              >
                {experience.additional.label}
              </a>
            {/if}
          {/snippet}

          {#snippet children()}
            {#each experience.project as singleProject (singleProject.title)}
              <Project {...singleProject}>
                <ul>
                  {#each singleProject.detail as line, detailIndex (detailIndex)}
                    <li>{line}</li>
                  {/each}
                </ul>
              </Project>
            {/each}
          {/snippet}
        </Row>
      {/each}
    {/if}

    <h2>{labels.otherExperiences}</h2>
    {#if otherExperiences}
      {#each otherExperiences as experience, experienceIndex (experienceIndex)}
        {#if experience.companyName && experience.dateFrom && experience.role}
          <Row
            companyName={experience.companyName}
            dateFrom={experience.dateFrom}
            role={experience.role}
          >
            {#snippet children()}
              {#each experience.project as singleProject (singleProject.title)}
                <Project {...singleProject}>
                  <ul>
                    {#each singleProject.detail as line, detailIndex (detailIndex)}
                      <li>{line}</li>
                    {/each}
                  </ul>
                </Project>
              {/each}
            {/snippet}
          </Row>
        {:else}
          {#each experience.project as singleProject (singleProject.title)}
            <Project {...singleProject} other />
          {/each}
        {/if}
      {/each}
    {/if}

    <h2>{labels.certificates}</h2>
    {#if certificates}
      <ul>
        {#each certificates as certificate (certificate.label)}
          <li>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={certificate.label}
              title={certificate.label}
            >
              {certificate.label}
            </a>
          </li>
        {/each}
      </ul>
    {/if}

    <h2>{labels.skills}</h2>
    {#if skills}
      <div class="skills-wrapper">
        {#each skills as skill (skill.title)}
          <SideList title={skill.title} list={skill.list} />
        {/each}
      </div>
    {/if}
  </div>
</article>

<style>
  .content-wrapper {
    display: flex;
    flex-direction: column;
  }

  .skills-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    word-break: break-word;
  }

  @media (max-width: 960px) {
    .skills-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .skills-wrapper {
      grid-template-columns: 1fr;
    }
  }

  @media print {
    p {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    h2 {
      page-break-after: avoid;
      break-after: avoid;
    }

    h2 + * {
      page-break-before: avoid;
      break-before: avoid;
    }

    .content-wrapper > div {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  }
</style>
