const getDateOptions = (): string[] => {
  const today = new Date();
  const options: string[] = [];

  const days = [
    { label: "Ayer", offset: -1 },
    { label: "Hoy", offset: 0 },
    { label: "Mañana", offset: 1 },
    { label: "Domingo", offset: 2 },
    { label: "Lunes", offset: 3 },
    { label: "Martes", offset: 4 },
    { label: "Miércoles", offset: 5 },
    { label: "Jueves", offset: 6 }
  ];

  for (const day of days) {
    const date = new Date(today);
    date.setDate(today.getDate() + day.offset);

    const dayNumber = date.getDate();
    const month = date.toLocaleString("es-PE", { month: "long" });
    const weekday = day.label;

    options.push(`${weekday} ${dayNumber} de ${month}`);
  }

  return options;
};

export default getDateOptions;