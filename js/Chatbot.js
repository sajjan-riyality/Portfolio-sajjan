window.addEventListener("DOMContentLoaded", function() {
    window.AgentInitializer.init({
      rootId: "JotformAgent-019507b57eb171c6ae7f84ec525f3933255e",
      formID: "019507b57eb171c6ae7f84ec525f3933255e",
      queryParams: ["skipWelcome=1", "maximizable=1"],
      domain: "https:\/\/www.jotform.com",
      isInitialOpen: false,
      isDraggable: false,
      background: "linear-gradient(180deg, #C8CEED 0%, #C8CEED 100%)",
      buttonBackgroundColor: "#0a1551",
      buttonIconColor: "#fff",
      variant: false,
      customizations: {
        greeting: "Yes",
        greetingMessage: "Hi! How can I assist you?",
        pulse: "Yes",
        position: "right"
      }
    });
  });