<script lang="ts">
  import { getResumeData } from '$lib/data/resume';
  import type { PageData } from './$types';
  import Title from '$lib/components/Title.svelte';
  import Project from '$lib/components/Project.svelte';
  import SideList from '$lib/components/SideList.svelte';
  import Row from '$lib/components/Row.svelte';

  let { data }: { data: PageData } = $props();

  const resumeData = $derived(getResumeData(data.lang));

  const introduction = $derived(resumeData.introduction);
  const workExperiences = $derived(resumeData.workExperiences);
  const otherExperiences = $derived(resumeData.otherExperiences);
  const education = $derived(resumeData.education);
  const skills = $derived(resumeData.skills);
</script>

<article>
  <Title
    githubLink={introduction.githubLink}
    linkedinLink={introduction.linkedinLink}
    lang={data.lang}
    name={introduction.name}
    role={introduction.role}
    tagline={introduction.tagline}
  />

  <div class="content-wrapper">
    <div>
      {#each introduction.briefing as line, index (index)}
        <p>{line}</p>
      {/each}
    </div>

    <h2>Work Experience</h2>
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
        {#if experienceIndex < workExperiences.length - 1}
          <hr class="row-divider" aria-hidden="true" />
        {/if}
      {/each}
    {/if}

    <h2>Skills Set</h2>
    {#if skills}
      <div class="skills-wrapper">
        {#each skills as skill (skill.title)}
          <SideList title={skill.title} list={skill.list} />
        {/each}
      </div>
    {/if}

    <h2>Awards & Projects</h2>
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
          {#if experienceIndex < otherExperiences.length - 1}
            <hr class="row-divider" aria-hidden="true" />
          {/if}
        {:else}
          {#each experience.project as singleProject (singleProject.title)}
            <Project {...singleProject} other />
            {#if experienceIndex < otherExperiences.length - 1}
              <hr class="row-divider" aria-hidden="true" />
            {/if}
          {/each}
        {/if}
      {/each}
    {/if}

    <!-- <h2>Certificates</h2>
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
    {/if} -->

    <h2>Education</h2>
    {#if education}
      <ul>
        {#each education as education, educationIndex (educationIndex)}
          <Row {...education} companyName={education.school} role={education.major ?? ''} />
        {/each}
      </ul>
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

  .row-divider {
    background-color: var(--color-bg-divider);
    border: none;
    height: 1px;
    margin: 3rem 0;
    width: 100%;
  }

  @media (max-width: 960px) {
    h2 {
      font-size: 2.5rem;
    }

    .skills-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }

    .row-divider {
      margin: 1rem 0;
    }
  }

  @media (max-width: 480px) {
    .skills-wrapper {
      grid-template-columns: 1fr;
      gap: 0;
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
