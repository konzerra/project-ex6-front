
export const authorities = {
  portal: {
    main: "portal.main"
  },
  score: {
    main: "score.main"
  },
  tracker:  {
    department :{
      main: "tracker.department"
      },
    hr : {
      hr_main: "",
      department: {
        main:  "tracker.hr.department_main",
        register: "tracker.hr.department_register",
      },
      sector: {
        register: "hr.sector.register",
        update: "hr.sector.update"
      },
      employee: {
        register: ""
      }
    }
  },
  menuList: [
    {
      routeLink: 'dashboard',
      // icon: 'fal fa-cog',
      icon: 'bi bi-house',
      label: 'Главная',
    },
    {
      routeLink: 'tracker/department',
      // icon: 'fal fa-cog',
      icon: 'bi bi-house-check',
      label: 'Главная',
    },
    {
      routeLink: 'score/scoring',
      // icon: 'fal fa-cog',
      icon: 'bi bi-calculator',
      label: 'Scoring analytics',
    },
    {
      routeLink: 'tracker/hr',
      // icon: 'fal fa-cog',
      icon: 'bi bi-person-check',
      label: 'Организацонный отдел',
    },
    {
      routeLink: 'tracker/hr/department',
      // icon: 'fal fa-cog',
      icon: 'bi bi-bank',
      label: 'Организацонный отдел',
    },
    {
      routeLink: 'tracker/hr/employee',
      // icon: 'fal fa-cog',
      icon: 'bi bi-people-fill',
      label: 'Организацонный отдел',
    },
    {
      routeLink: 'user',
      // icon: 'fal fa-cog',
      icon: 'bi bi bi-person',
      label: 'Профиль',
    }
  ]
}
