<template>
  <div class="contact-form--background">
    <form class="contact-form" ref="form" @submit.prevent="sendEmail">
      <h2>Me contacter</h2>
      <div class="contact-form--category contact-form--name">
        <label for="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div class="contact-form--category contact-form--email">
        <label for="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div class="contact-form--category contact-form--object">
        <label for="object">Objet</label>
        <input type="text" name="object" />
      </div>
      <div class="contact-form--category contact-form--message">
        <label for="message">Message</label>
        <textarea name="message"></textarea>
      </div>
      <input class="button" type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      object: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_zc3dxnc",
          "template_yz24xhm",
          e.target,
          "user_4MHQFlff1hpBy3VcP4Cqd",
          {
            name: this.name,
            email: this.email,
            object: this.object,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.object = "";
      this.message = "";
    },
  },
};
</script>
