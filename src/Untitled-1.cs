using Reveal.Sdk;
using System;
using System.IO;
using System.Threading.Tasks;

namespace RevealApiServer.Reveal
{
    public class RevealSdkContext : RevealSdkContextBase
    {
        public override Task<Dashboard> GetDashboardAsync(string dashboardId)
        {
            Dashboard dashboard = null;
            var path = Path.Combine(Environment.CurrentDirectory, 
                $"Dashboards/{dashboardId.ToLower()}.rdash");
            
            using (var stream = new FileStream(path, FileMode.Open))
            {
                dashboard = new Dashboard(stream);
            }

            return Task.FromResult(dashboard);
        }

        public override Task SaveDashboardAsync(string userId, string dashboardId, Dashboard dashboard)
        {
            return Task.CompletedTask;
        }
    }
}