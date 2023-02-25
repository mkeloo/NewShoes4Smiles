import React from 'react';

const Events = () => {
  const events = [
    //     {
    //       id: 1,
    //       title: 'Shoe Drive',
    //       date: 'Oct 17th (Monday) to Nov 18th (Friday)',
    //       time: '5:00 PM',
    //       location: 'Shoe Drive Locations',
    //       description: 'Collecting shoes for donations.',
    //     },
    //     {
    //       id: 2,
    //       title: 'Second GBM',
    //       date: 'October 18th, 2022 (Tuesday)',
    //       time: '5:00 PM',
    //       location: 'Reitz Union, Room 2360',
    //       description: 'Second General Body Meeting',
    //     },
    //         {
    //       id: 2,
    //       title: 'Trick-Org-Treat',
    //       date: 'October 26th, 2022 (Wednesday)',
    //       time: '4:00 PM to 8:00 PM',
    //       location: 'Plaza of the Americas',
    //       description: 'Halloween Themed Organization Fair',
    //     },
    //     {
    //       id: 3,
    //       title: 'Volunteering with Project Downtown',
    //       date: 'November 19th, 2022 (Saturday)',
    //       time: '12:30 PM',
    //       location: 'City Hall',
    //       description: 'Serving the homeless population of Gainesville.',
    //     },
    //     {
    //       id: 4,
    //       title: 'Shoe Cleaning Event',
    //       date: 'February 11th, 2023 (Saturday)',
    //       time: '12 PM to 4 PM',
    //       location: 'Depot Park',
    //       description: 'Cleaning shoes for donation.',
    //     },

    {
      id: 5,
      title: 'UF Big Event',
      date: 'March 4th, 2023 (Saturday)',
      time: '9 AM to 12 PM',
      location: 'Flavet Field',
      description: 'Community Service in Gainesville',
    },

    {
      id: 6,
      title: '5th GBM',
      date: 'March 6th, 2023 (Monday)',
      time: '6:30 PM',
      location: 'Little Hall, Room Lit 0217',
      description: '5th General Body Meeting',
    },
    {
      id: 6,
      title: 'Shoe Cleaning Event',
      date: 'March 25th, 2023 (Saturday)',
      time: '12 PM to 4 PM',
      location: 'Reitz Union',
      description: 'Cleaning shoes for donation',
    },

    //     {
    //       id: 5,
    //       title: 'Volunteering with Boys & Girls Club',
    //       date: '0000-00-00 (TBA)',
    //       time: '0:00 AM',
    //       location: 'TBA',
    //       description: 'Spending the day with the youth of Gainesville.',
    //     },
    //     {
    //       id: 6,
    //       title: 'Study Social',
    //       date: '0000-00-00 (TBA)',
    //       time: '0:00 AM',
    //       location: 'TBA',
    //       description: 'Study session with other members of the club.',
    //     },
  ];

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="600"
      data-aos-delay="300"
      // translateX={['-100px', '100px']}
      id="calendar"
      className="w-full h-full grid grid-row-2 py-14 justify-center items-center bg-[#607EAA]"
    >
      <div className=" rounded-2xl md:mx-0 md:p-0 mx-4 p-2">
        <h1 className="lg:text-7xl md:text-4xl text-[#EAE3D2]  p-6 m-6  text-3xl font-bold py-6 pb-4 flex justify-center">
          Shoes4Smiles Events
        </h1>

        {/* <div className="flex lg:hidden md:hidden"> */}
        <div className="flex p-6 m-6">
          <div>
            <ul className="">
              {/* <li className="p-2 my-3">
                <h1 className="text-xl font-bold">Shoe Drive</h1>
                <p>
                  <span className="font-bold">Date: </span> Oct 17th (Monday) to
                  Nov 18th (Friday)
                </p>
                <p>
                  <span className="font-bold">Time: </span> Anytime
                </p>
                <p>Collecting shoes for donations.</p>
                <p>
                  <span className="font-bold">Drop-Off Locations: </span>
                  <ul>
                    <li className="list-disc px-2 mx-2">
                      <span className="font-semibold">Library West</span> -
                      first floor (by escalator),
                    </li>
                    <li className="list-disc px-2 mx-2">
                      <span className="font-semibold">
                        Marston Science Library
                      </span>{' '}
                      - first floor (by elevator),
                    </li>
                    <li className="list-disc px-2 mx-2">
                      <span className="font-semibold">
                        Health Science Library
                      </span>{' '}
                      - second floor,
                    </li>
                    <li className="list-disc px-2 mx-2">
                      <span className="font-semibold">Florida Gym</span> -
                      second floor (Dean's Office)
                    </li>
                  </ul>
                </p>
              </li> */}
              {events.map((event) => (
                <li
                  key={event.id}
                  className="p-2 text-[#EAE3D2]  text-2xl my-3"
                >
                  <h1 className="text-3xl font-bold">{event.title}</h1>
                  <p>
                    <span className="font-bold text-2xl">Date: </span>{' '}
                    {event.date}
                  </p>
                  <p>
                    <span className="font-bold text-2xl">Time: </span>{' '}
                    {event.time}
                  </p>
                  <p>
                    <span className="font-bold text-2xl">Location: </span>{' '}
                    {event.location}
                  </p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
