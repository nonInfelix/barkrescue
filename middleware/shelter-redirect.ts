export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/shelter" || to.path === "/shelter/") {
    return navigateTo("/");
  }
});
