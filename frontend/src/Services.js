import React, { useEffect, useState } from 'react';

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div>
            <h2>Church Services</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        {service.name} - {service.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Services;
