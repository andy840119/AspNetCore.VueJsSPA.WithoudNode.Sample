var spaHome = Vue.component("Home", {
    template: `
    <div class="text-center">
        <h1 class="display-4">Welcome</h1>
        <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
    </div>
  `,
    props: ["title"],
    $_veeValidate: {
        validator: "new"
    }
});