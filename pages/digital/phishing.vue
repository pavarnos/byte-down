<template>
  <div>
    <h1>Phishing</h1>
    <p>Popular ways to phish are:</p>
    <ul>
      <li>Send a poisoned document that has malware attached. When the person opens the email, they get a virus that
        gives you access to their computer.
      </li>
      <li>Send an email that tricks the person into visiting a fake web site.
        <ul>
          <li> You might pretend that the email is
            from the IT Dept who have locked their account and want them to enter their password to unlock it (which
            lets
            you steal their password).
          </li>
          <li>Or you could pretend that a package cannot be delivered, so the person should click a
            link to track it and ask the courier company to try delivering it again. When they visit the web site, they
            get a virus that gives you access.
          </li>
        </ul>
      </li>
    </ul>
    <p>The company web site has a list of important people in The Department. With email addresses. This is too
      easy.</p>
    <p>Making a fake web site takes a bit of work. You decide an infected document is the easiest thing to do. You
      create a document that looks like it is from a sugar manufacturer in another country, announcing pre-launch
      samples of a new type of sugar that would work really well for donut toppings. Creating a tempting story around
      your document and your email will make it much more likely someone will open it.</p>
    <p>There are plenty of tools available that can create custom malware for a document that will slip through most
      email filters. So you use one of those, and attach it to your email.</p>
    <p>
      <NextButton to="/digital/phishing-send">Send Email</NextButton>
    </p>
    <BackButton/>
  </div>
</template>
