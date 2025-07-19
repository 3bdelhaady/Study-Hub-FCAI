const EventCard = ({ event }) => {
    return (
      <div className="event-card">
        <img className="event-img" src={event.image} alt={event.title} />
        <div
          className="event-tag"
          style={
            event.tagColor
              ? { color: event.tagColor, border: `1px solid ${event.tagColor}` }
              : {}
          }
        >
          {event.tag}
        </div>
        <div className="event-content">
          <div className="event-title">{event.title}</div>
          <div className="event-desc">{event.desc}</div>
          <div className="event-meta">
            <span><i className="fa-regular fa-calendar"></i> {event.date}</span>
            <span><i className="fa-solid fa-location-dot"></i> {event.location}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default EventCard;
  