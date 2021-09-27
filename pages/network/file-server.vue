<template>
  <div>
    <ToolKit :onDeviceScanner="() => this.scanning = true"/>
    <h1>File Server</h1>
    <p>You easily get in to the file server: much of it is publicly visible to anyone on the network via open file
      shares.</p>
    <p>There are a lot of files. Maybe the Device scanner can help search through them quickly to find anything
      useful?</p>
    <RunScan :started="scanning">
      <template v-slot:before>
        <p class="text-muted">Use the Device Scanner</p>
      </template>
      <template v-slot:after>
        <HoleFound name="Sensitive Information (Staff)">
          <strong>Congratulations!</strong> You found <strong>Sensitive Information</strong>
        </HoleFound>
        <p>The file system is an untidy mess. But in among the financial spreadsheets and draft strategic plans from 10
          years ago, there are some real gems:</p>
        <ul>
          <li>Lists of full names, addresses, phone numbers, bank account numbers, salary information, and photos of
            drivers licenses or passports for all the staff. This could be sold for a fair amount of money on the
            internet, and would make it easy to <strong>steal the identity</strong> of most people in the list.
          </li>
          <li>A number of word documents with file names like &quot;<strong>Andy Passwords.docx</strong>&quot;. You
            try to open them but they are protected. They need another password to open them.
          </li>
          <li>A folder full of new unreleased <strong>donut recipes</strong> representing years of research. Some look
            very tasty. These are state secrets that another government might pay a lot of money for, or cause problems
            for politicians when their citizens get better donuts than ours.
          </li>
          <li>Much more...</li>
        </ul>
        <p>And it was all stored unencrypted on an open file server. Yikes! Looks like The Department have never heard
          of the <a href="https://en.wikipedia.org/wiki/Principle_of_least_privilege">Principle of Least Privilege</a>,
          where each person only gets access to just the things they need (and nothing else). They may also be in breach
          of a few local laws about storing and protecting personally identifiable information.</p>
        <p>You don't have time to dig deeper, but it might be fun to crack open those password documents...</p>
        <p>
          <NextButton to="/network/password-docs">Open Password Documents</NextButton>
        </p>
      </template>
    </RunScan>
    <BackButton/>
  </div>
</template>

<script type="ts">
export default {
  data: () => ({ scanning: false })
}
</script>
