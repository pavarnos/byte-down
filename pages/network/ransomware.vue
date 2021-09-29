<template>
  <div>
    <RightImage src="code.png" alt="Code"></RightImage>
    <h1>Ransomware</h1>
    <p>You promised not to be evil, but you also want to play a bit...</p>
    <p>You copy a ransomware template from the internet and remove the file encryption and other badness. It is
      important to check carefully that the ransomware kitset doesn't have a back door of its own. The back door will
      allow the original ransomware author to also access any computers you infect.</p>
    <p>You spend a few hours snipping pieces out of the code and carefully checking for back doors. It can be really
      hard to tell if you got them all, or even if any are actually there because they can be very well hidden. You are
      not sure if this is such a great idea. It would look really good on your report to The Department if you could
      show you owned all their PCs. It would show how very vulnerable they are to someone else doing the same. But what
      if you missed something?</p>
    <p>
      <NextButton to="/network/ransomware-deploy">Install Ransomware</NextButton>
    </p>
    <BackButton/>
  </div>
</template>
