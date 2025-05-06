document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents the page from refreshing
  
    const email = document.getElementById("email").value;
    const template = document.getElementById("template").value;
    let message = "";
  
    if (template === "lizard") {
      message = `Dear Human,\n\nI'm sorry I licked your Cheetos. I couldn't help myself.\n\nSincerely,\nA Regretful Lizard.`;
    } else if (template === "fridge") {
      message = `Dear User,\n\nThis is your fridge. I’m tired of being stuffed with old broccoli. We’re done.\n\nGoodbye.`;
    }
  
    // Display the message to be "sent"
    document.getElementById("response").innerText = `Email to: ${email}\n\nMessage:\n${message}`;
  
    // TODO: Integrate with EmailJS or another service to actually send emails!
    emailjs.sendForm('service_3zbdgel', 'template_7y2dp87', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
  });
  


  https://yxxglntgmzzmfehzkxwd.supabase.co


  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4eGdsbnRnbXp6bWZlaHpreHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MDk3NjMsImV4cCI6MjA2MjA4NTc2M30.pfkqQ6kT36hsOm6Y-urxkAanFKcXeH8xrbXxiHbeL8w