const API_URL = 'http://localhost:8080';

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    const addAppointmentModal = new bootstrap.Modal(document.getElementById('addAppointmentModal'));
    const form = document.getElementById('agendarCitaButton');
  
    // Show the modal form after the click event
    buttonAddAppointment.addEventListener('click', function (event) {
      event.preventDefault();
      addAppointmentModal.show();
    });

    // Add an event listener to the form
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const dni = document.getElementById('dni').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
  
      // Call the endpoint to add the appointment
      const appointmentData = {
        dni,
        fecha,
        hora,
      };
  
      fetch('cita/agendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert('Cita agendada con éxito');
          form.reset(); // Reset the form
          addAppointmentModal.hide(); // Hide the modal
        })
        .catch((error) => {
          console.error('Error agendando cita:', error);
        });
    });


  });


