import Theatre from "./theatre";

interface Booking {
  _id: string;
  theatreId: string;
  userId: string;
  userEmail: string;
  userName: string;
  bookedTheatre: Theatre;
  isSubmitted: boolean;
  createdAt: Date;
}

export default Booking;
