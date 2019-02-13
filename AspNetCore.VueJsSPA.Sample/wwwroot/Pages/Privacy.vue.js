var spaPrivacy = Vue.component("Privacy", {
    template: `
    <p>Use this page to detail your site's privacy policy.</p>
  `,
    props: ["title"],
    $_veeValidate: {
        validator: "new"
    }
});