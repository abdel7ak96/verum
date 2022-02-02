export default function() {
  return [
    {
      title: "Overview",
      to: "/overview",
      htmlBefore: '<i class="material-icons">pie_chart_outlined</i>',
      htmlAfter: ""
    },
    {
      title: "Create new event",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/add-new-event",
    },
    {
      title: "Logs",
      htmlBefore: '<i class="material-icons">content_paste</i>',
      to: "/logs",
    },
    {
      title: "About",
      htmlBefore: '<i class="material-icons">info_outline</i>',
      to: "/about",
    }
  ];
}
