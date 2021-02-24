const enfermos = [
  {
    paciente: {
      nombre: 'Manuel',
      edad: 25,
      sexo: 'H'
    },
    diasIngresado: 3,
    dieta: 'Baja en fibra'
  },
  {
    paciente: {
      nombre: 'Marta',
      edad: 56,
      sexo: 'M'
    },
    diasIngresado: 5,
    dieta: 'Diabetes'
  },
  {
    paciente: {
      nombre: 'Julia',
      edad: 38,
      sexo: 'M'
    },
    diasIngresado: 1,
    dieta: 'Sin sal'
  },
  {
    paciente: {
      nombre: 'Esteban',
      edad: 40,
      sexo: 'H'
    },
    diasIngresado: 3,
    dieta: 'Diabetes'
  },
  {
    paciente: {
      nombre: 'Arturo',
      edad: 19,
      sexo: 'H'
    },
    diasIngresado: 2,
    dieta: 'Baja en fibra'
  },
  {
    paciente: {
      nombre: 'Isabel',
      edad: 63,
      sexo: 'M'
    },
    diasIngresado: 6,
    dieta: 'Sin sal'
  }
];


const informeMedico = enfermos => {
  const nPacientesHospitalizados = enfermos => enfermos.length;

  const nMayoriadeEdad = enfermos => enfermos.filter(enfermo => enfermo.paciente.edad > 30).length;

  const nPersonasDiabeticas = enfermos => enfermos.filter(enfermo => enfermo.dieta === "Diabetes").length;

  const nDiasIngresosenHospital = enfermos => enfermos.reduce((dias, pacientes) => dias + pacientes.diasIngresado, 0);

  const MediadeEdadMujeres = enfermos => enfermos
    .filter(enfermo => enfermo.paciente.sexo === "M")
    .reduce((edades, pacientemujer) => edades + pacientemujer.paciente.edad, 0);

  return {
    nPacientesHospitalizados, nMayoriadeEdad, nPersonasDiabeticas, nDiasIngresosenHospital, MediadeEdadMujeres
  };
}

const Hospital = informeMedico(enfermos);

console.log(
  `Pacientes Ingresados: ${Hospital.nPacientesHospitalizados(enfermos)}\n\
  Pacientes Mayores de edad: ${Hospital.nMayoriadeEdad(enfermos)}\n\
  Pacientes con Diabetes: ${Hospital.nPersonasDiabeticas(enfermos)}\n\
  Dias de Ingresos Totales: ${Hospital.nDiasIngresosenHospital(enfermos)}\n\
  Media de Edad en Mujeres: ${Hospital.MediadeEdadMujeres(enfermos)}`
);
