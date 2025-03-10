import React, { useState } from "react";
import { Star, MapPin, Clock, Filter, ChevronDown } from "lucide-react";

interface Mechanic {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  distance: string;
  availability: string;
  image: string;
}

const FindMechanic: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const mechanics: Mechanic[] = [
    {
      id: 1,
      name: "Alex Johnson",
      specialty: "Engine Specialist",
      rating: 4.9,
      distance: "1.2 miles",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Sarah Williams",
      specialty: "Electrical Systems",
      rating: 4.8,
      distance: "2.5 miles",
      availability: "Available in 30 min",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Michael Chen",
      specialty: "Brake Specialist",
      rating: 4.7,
      distance: "3.1 miles",
      availability: "Available Today",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 4,
      name: "David Rodriguez",
      specialty: "Transmission Expert",
      rating: 4.9,
      distance: "1.8 miles",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 5,
      name: "Emily Davis",
      specialty: "Tire Specialist",
      rating: 4.6,
      distance: "2.0 miles",
      availability: "Available Tomorrow",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 6,
      name: "James Brown",
      specialty: "General Mechanic",
      rating: 4.5,
      distance: "3.5 miles",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  const specialties = [
    "All Specialties",
    "Engine Specialist",
    "Electrical Systems",
    "Brake Specialist",
    "Transmission Expert",
    "Tire Specialist",
    "General Mechanic",
  ];

  const filteredMechanics = mechanics.filter((mechanic) => {
    const matchesSearch = mechanic.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "" ||
      selectedSpecialty === "All Specialties" ||
      mechanic.specialty === selectedSpecialty;
    const matchesRating =
      selectedRating === null || mechanic.rating >= selectedRating;

    return matchesSearch && matchesSpecialty && matchesRating;
  });

  return (
    <section id="find-mechanic" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find a <span className="text-neon-yellow">Mechanic</span> Near You
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with skilled mechanics in your area who can diagnose and fix
            your vehicle issues quickly and efficiently.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-primary-black rounded-lg p-4 md:p-6 mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search mechanics by name"
                  className="w-full pl-4 pr-10 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="relative w-full md:w-auto">
                <select
                  className="w-full md:w-48 pl-4 pr-10 py-3 bg-dark-gray border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  <option value="">All Specialties</option>
                  {specialties.slice(1).map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={20}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              <button
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-dark-gray border border-gray-700 text-gray-200 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
            </div>

            {isFilterOpen && (
              <div className="mt-4 p-4 border-t border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-4 slide-in">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Minimum Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[null, 3, 4, 4.5, 4.8].map((rating) => (
                      <button
                        key={rating === null ? "any" : rating}
                        className={`px-3 py-1 rounded ${
                          selectedRating === rating
                            ? "bg-neon-yellow text-primary-black"
                            : "bg-dark-gray text-gray-300 border border-gray-700"
                        }`}
                        onClick={() => setSelectedRating(rating)}
                      >
                        {rating === null ? "Any" : rating}+
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Availability
                  </label>
                  <select className="w-full pl-4 pr-10 py-2 bg-dark-gray border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200">
                    <option value="">Any Time</option>
                    <option value="now">Available Now</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Distance
                  </label>
                  <select className="w-full pl-4 pr-10 py-2 bg-dark-gray border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200">
                    <option value="">Any Distance</option>
                    <option value="1">Within 1 mile</option>
                    <option value="5">Within 5 miles</option>
                    <option value="10">Within 10 miles</option>
                    <option value="25">Within 25 miles</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMechanics.map((mechanic) => (
              <div
                key={mechanic.id}
                className="bg-primary-black rounded-lg overflow-hidden shadow-lg hover-scale glow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={mechanic.image}
                      alt={mechanic.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-deep-green"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{mechanic.name}</h3>
                      <p className="text-neon-yellow">{mechanic.specialty}</p>
                      <div className="flex items-center mt-1">
                        <Star
                          size={16}
                          className="text-neon-yellow fill-neon-yellow"
                        />
                        <span className="ml-1 text-gray-300">
                          {mechanic.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-300">
                      <MapPin size={16} className="mr-2 text-deep-green" />
                      <span>{mechanic.distance} away</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock size={16} className="mr-2 text-deep-green" />
                      <span>{mechanic.availability}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button className="flex-1 bg-deep-green text-gray-200 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                      View Profile
                    </button>
                    <button className="flex-1 bg-neon-yellow text-primary-black py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMechanics.length === 0 && (
            <div className="text-center py-12 bg-primary-black/50 rounded-lg mt-6">
              <p className="text-gray-300 text-lg">
                No mechanics found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          )}

          {filteredMechanics.length > 0 && (
            <div className="text-center mt-8">
              <button className="bg-transparent border border-neon-yellow text-neon-yellow px-6 py-3 rounded-lg hover:bg-neon-yellow hover:text-primary-black transition-all duration-300">
                View All Mechanics
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindMechanic;