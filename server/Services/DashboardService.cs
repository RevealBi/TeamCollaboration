using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Reveal.Sdk.Samples.Web.UpMedia.Backend.Services
{
    public class DashboardService : IDashboardService
    {
        Dictionary<string, Dashboard> _availableDashboards = null;

        public DashboardService()
        {
            //var dashboardsPrefix = "Reveal.Sdk.Samples.Web.UpMedia.Backend.Dashboards.";
            var dashboardsFolder = Path.Combine(Environment.CurrentDirectory, "Dashboards");

            _availableDashboards = Directory.EnumerateFiles(dashboardsFolder)
                .Where(name => name.EndsWith(".rdash"))
                .ToDictionary(
                    name => Path.GetFileName(name).Replace(".rdash", ""),
                    name =>
                    {
                        Dashboard dashboard = null;
                        using (var stream = File.OpenRead(name))
                        {
                            dashboard = new Dashboard(stream);
                        }
                        return dashboard;
                    });
        }

        public ReadOnlyDictionary<string, Dashboard> GetAvailableDashboards()
        {
            return new ReadOnlyDictionary<string, Dashboard>(_availableDashboards);
        }

        public Dashboard GetDashboardByName(string name)
        {
            return _availableDashboards.ContainsKey(name) ? _availableDashboards[name] : null;
        }

        public void UpdateDashboardByName(string name, Dashboard dashboard)
        {
            _availableDashboards[name] = dashboard;
        }

        public void AddNewDashboard(string name, Dashboard dashboard)
        {
            _availableDashboards[name] = dashboard;
        }

    }
}
