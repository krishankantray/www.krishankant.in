const timelineData = [
  {
    time: 'Jan 2022 - Current',
    role: 'Software Engineer',
    company: 'Paisabazaar',
    companyURL: 'https://paisabazaar.com/',
    companyBio: 'A fintech comapny.',
    // works: [],
  },
  {
    time: 'May 2021 - Jan 2022',
    role: 'Senior Software Engineer',
    company: 'Breachlock Inc.',
    companyURL: 'https://breachlock.com',
    companyBio: 'Acyber-security comapny.',
    works: [
      <span key="0">
        <b>
          <u>RESTful Services</u>
        </b>{' '}
        : Created multiple services for features like data files upload/download, bulk csv data
        import etc.
      </span>,
      <span key="1">
        <b>
          <u>AWS S3 SDK</u>
        </b>{' '}
        : Migrated from file system storage to AWS S3
      </span>,
      <span key="2">
        <b>
          <u>Task scheduler</u>
        </b>{' '}
        : Task scheduler for sending emails, uploading S3 files, and DB data updation for legacy
        services.
      </span>,
      <span key="3">
        <b>
          <u>Data Visualization</u>
        </b>{' '}
        : Dashboard for representing data using charts and graphs on the landing page of the
        application.
      </span>,
    ],
  },
  {
    time: 'May 2020 - Apr 2021',
    role: 'Software Engineer',
    company: 'Breachlock Inc',
    companyURL: 'https://breachlock.com',
    companyBio: 'A cyber-security company.',
    works: [<span key="0">Migration to react frontend and node microservices.</span>],
  },
  {
    time: 'June 2019 - May 2020',
    role: 'Application Engineer',
    company: 'CVENT',
    companyURL: 'https://cvent.com/',
    companyBio: 'A hospitality SaaS company',
    works: [
      <span key="0">
        <b>
          <u>RESTful APIs</u>
        </b>{' '}
        : Worked on several CRUD APIs used for updating data in the database.
      </span>,
      <span key="1">
        <b>
          <u>DB Query Optimization</u>
        </b>{' '}
        : Optimised SQL query in complex data extraction services.
      </span>,
      <span key="2">
        <b>
          <u>Charts in Reports</u>
        </b>{' '}
        : Build several charts for data Visualization in web based reports in JavaScript.
      </span>,
    ],
  },
  {
    time: 'Feb 2019 - May-2019',
    role: 'Intern-Application Engineer',
    company: 'CVENT',
    companyURL: 'https://cvent.com/',
  },
]

module.exports = timelineData
