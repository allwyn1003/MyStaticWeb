// Simulate data refresh for demo purposes
document.getElementById("refreshBtn").addEventListener("click", () => {
  const users = Math.floor(Math.random() * 2000) + 500;
  const projects = Math.floor(Math.random() * 20) + 5;
  const visits = Math.floor(Math.random() * 80000) + 10000;

  document.getElementById("usersCount").innerText = users.toLocaleString();
  document.getElementById("projectsCount").innerText = projects;
  document.getElementById("visits").innerText = visits.toLocaleString();

  const status = Math.random() > 0.1 ? "✅ Online" : "❌ Offline";
  document.getElementById("status").innerText = status;
});
