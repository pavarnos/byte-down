<template>
  <div>
    <h1>Web Server</h1>
    <p>You look around for a while, trying various tools to</p>
    <ul>
      <li>Get a command line <em>privilege escalation</em>, which is where you switch from an ordinary user who
        cannot do much (just serve web pages), and become a user with administrative rights. Nothing seems to work.
      </li>
      <li>Same for the database. You pull the username and password for the database out of the config file, but even
        when you are logged in to the database server you cannot do anything useful except see the content for the web
        site
      </li>
      <li>You try a number of common commands to see if you can break out of the web hosting user account. They are all
        well locked down. Nothing seems to work.
      </li>
    </ul>
    <p>You realise that the company hosting the web site is probably a professional third party who live in this hostile
      environment all the time. They know how to protect themselves against a hack. Even if you got in, it would not
      help because they have no donuts there...</p>
    <BackButton/>
  </div>
</template>
