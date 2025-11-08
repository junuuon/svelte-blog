<script lang="ts">
  import { resumeData } from '$lib/data/resume';
  import Title from '$lib/components/Title.svelte';
  import Project from '$lib/components/Project.svelte';
  import SideList from '$lib/components/SideList.svelte';
  import Row from '$lib/components/Row.svelte';

  const { introduction, workExperiences, otherExperiences, certificates, skills } = resumeData;
</script>

<svelte:head>
  <title>Junwon Park | 이력서</title>
</svelte:head>

<article>
  <Title
    githubLink={introduction.githubLink}
    linkedinLink={introduction.linkedinLink}
    title={introduction.title}
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
      {/each}
    {/if}

    <h2>Other Experiences</h2>
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
            <Project {...singleProject} other>
              <ul>
                {#each singleProject.detail as line, detailIndex (detailIndex)}
                  <li>{line}</li>
                {/each}
              </ul>
            </Project>
          {/each}
        {/if}
      {/each}
    {/if}

    <h2>Certificates</h2>
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

    <h2>SKILLS</h2>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 960px) {
      flex-direction: column;
    }
  }
</style>
