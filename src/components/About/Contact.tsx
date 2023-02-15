import { contact } from "data/Contact";

const Contact = (): JSX.Element => {
  return (
    <header className="bg-gray-50 rounded-xl p-4 border border-gray-100 w-2/4">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Contact
      </h1>
      <aside className="font-montserrat-medium grid grid-cols-2 gap-3">
        {contact.map((contact, key) => (
          <a
            key={key}
            href={contact.link}
            target={contact.blank ? "_blank" : "_parent"}
            className="flex items-center bg-white space-x-3 rounded-xl p-3 border border-gray-100"
          >
            <div className="w-10 h-10 flex justify-center items-center bg-gray-800 text-white rounded-lg">
              {contact.icon}
            </div>
            <div className="flex flex-col">
              <p> {contact.name} </p>
              <div className="text-gray-400 text-sm">{contact.value}</div>
            </div>
          </a>
        ))}
      </aside>
    </header>
  );
};

export default Contact;
