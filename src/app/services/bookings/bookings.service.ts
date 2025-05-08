

constructor(private bookingService: BookingService) {}

rentCar(car: any) {
  this.bookingService.addBooking({
    carId: car.id,
    carName: car.name,
    imageUrl: car.imageUrl,
    pricePerDay: car.pricePerDay,
    rentalDate: new Date().toISOString().split('T')[0],
    returnDate: '', // optional for now
  });

  alert(`${car.name} has been added to your bookings.`);
}
