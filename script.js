

document.addEventListener("DOMContentLoaded", () => {

  // Hamburger menu
  const hamburger = document.getElementsByClassName("hamburger")[0]
  const navLinks = document.getElementsByClassName("nav-links")[0]

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active")
      hamburger.classList.toggle("toggle")
    })
  }

  // Calendar and booking elements
  const popup = document.getElementById('booking-popup')
  const form = document.getElementById('booking-form')
  const timeInput = document.getElementById('selected-time')
  const timeSlotsContainer = document.getElementById('time-slots')
  const availableTimesDiv = document.getElementById('available-times')
  
  // Exit if elements don't exist (for other pages)
  if (!popup || !form) return

  let currentDate = new Date()
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  // Available times
  const availableSlots = {
    '2025-10-30': ['16:00', '17:15', '18:30'],
    '2025-11-06': ['16:00', '17:15', '18:30'],
    '2025-11-13': ['16:00', '17:15', '18:30'],
    '2025-11-15': ['10:00', '11:15', '12:30'],
    '2025-11-22': ['10:00', '11:15', '12:30'],
    '2025-11-27': ['16:00', '17:15', '18:30'],
    '2025-12-04': ['16:00', '17:15', '18:30'],
    '2025-12-11': ['16:00', '17:15', '18:30'],
  }

  const renderCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    
    const currentMonthElement = document.getElementById('current-month')
    if (!currentMonthElement) return
    
    currentMonthElement.textContent = `${monthNames[month]} ${year}`
    
    const firstDay = new Date(year, month, 1)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - (firstDay.getDay() + 6) % 7)
    
    const calendarGrid = document.querySelector('.calendar-grid')
    if (!calendarGrid) return

    // Remove existing days
    const existingDays = calendarGrid.querySelectorAll('.calendar-day')
    existingDays.forEach(day => day.remove())
    
// Create calendar days
const currentDateObj = new Date(startDate);
for (let i = 0; i < 42; i++) {
  const dayDiv = document.createElement('div');
  dayDiv.className = 'calendar-day';

 
  const displayDay = currentDateObj.getDate();
  const displayMonth = currentDateObj.getMonth();

  const dayNumber = document.createElement('div');
  dayNumber.className = 'day-number';
  dayNumber.textContent = displayDay;

  const pad = (num) => num.toString().padStart(2, '0');
const dateString = `${currentDateObj.getFullYear()}-${pad(currentDateObj.getMonth()+1)}-${pad(currentDateObj.getDate())}`;


  
  if (displayMonth !== month) {
    dayDiv.classList.add('other-month');
  } else if (availableSlots[dateString]) {
    dayDiv.classList.add('has-slots');
    dayDiv.dataset.date = dateString;

    const indicator = document.createElement('div');
    indicator.className = 'slots-indicator';
    dayDiv.appendChild(indicator);
  }

  dayDiv.appendChild(dayNumber);
  calendarGrid.appendChild(dayDiv);

  
  currentDateObj.setDate(currentDateObj.getDate() + 1);
}

  }

  const showTimeSlots = (date) => {
    const slots = availableSlots[date]
    if (!slots) return
    
    const [year, month, day] = date.split('-')
    const formattedDate = `${parseInt(day)}/${parseInt(month)}`
    
    availableTimesDiv.innerHTML = ''
    const timeSlotsGrid = document.createElement('div')
    timeSlotsGrid.className = 'time-slots-grid'
    
    slots.forEach(time => {
      const button = document.createElement('button')
      button.className = 'time-slot'
      button.textContent = time
      button.dataset.datetime = `${formattedDate} ${time}`
      timeSlotsGrid.appendChild(button)
    })
    
    availableTimesDiv.appendChild(timeSlotsGrid)
    timeSlotsContainer.style.display = 'block'
    
    timeSlotsContainer.scrollIntoView({ behavior: 'smooth' })
  }

  // Event listeners
  document.addEventListener('click', e => {
    // Calendar navigation
    if (e.target.id === 'prev-month') {
      currentDate.setMonth(currentDate.getMonth() - 1)
      renderCalendar()
    } else if (e.target.id === 'next-month') {
      currentDate.setMonth(currentDate.getMonth() + 1)
      renderCalendar()
    }
    
    // Click on calendar day
    else if (e.target.closest('.calendar-day.has-slots')) {
      const dayDiv = e.target.closest('.calendar-day')
      const date = dayDiv.dataset.date
      
      // Remove previous selection
      document.querySelectorAll('.calendar-day.selected').forEach(d => 
        d.classList.remove('selected'))
      
      dayDiv.classList.add('selected')
      showTimeSlots(date)
    }
    
    // Click on time slot
    else if (e.target.classList.contains('time-slot')) {
      timeInput.value = e.target.dataset.datetime
      popup.style.display = 'flex'
      popup.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    }
    
    // Close popup
    else if (e.target.classList.contains('close-booking') || e.target === popup) {
      popup.style.display = 'none'
      popup.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = 'auto'
    }
  })

  // Form submission - FIXED to use getElementById instead of FormData
  form.addEventListener('submit', e => {
    e.preventDefault()
    
    // Get values using getElementById (matches HTML id attributes)
    const selectedTime = document.getElementById('selected-time').value
    const massageType = document.getElementById('massage-type').value
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value || 'No message'
    
    const subject = encodeURIComponent(`Booking: ${selectedTime} - ${massageType}`)
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Time: ${selectedTime}\n` +
      `Massage: ${massageType}\n` +
      `Message: ${message}`
    )
    
    window.location.href = `mailto:healthbyjasmin@gmail.com?subject=${subject}&body=${body}`
    
    popup.style.display = 'none'
    popup.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = 'auto'
    form.reset()
    timeSlotsContainer.style.display = 'none'
  })

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
      popup.style.display = 'none'
      popup.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = 'auto'
    }
  })

  // Initialize calendar
  renderCalendar()


})