import React, { useState } from "react";
import cn from "classnames";
import blister from "../assets/blister2.png";

const BookPopover = ({ open, setOpen }) => {
  const [contact, setContact] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSent) {
      setOpen(false);
      return;
    }
    setIsError(false);
    setIsSent(false);
    const form = new FormData();
    form.append(
      "from",
<<<<<<< HEAD
      "Mailgun Sandbox <postmaster@sandbox791d34e1ca884f5288f995d9c2aca955.mailgun.org>"
    );
    form.append("to", "Simon Kuleshov <photosem.jpg@gmail.com>");
=======
      "Mailgun Sandbox <postmaster@sandbox662797646cd5414eb52d4252024ed199.mailgun.org>"
    );
    form.append("to", "Aleksei Zavadskii <alesha.zawadsky@yandex.ru>");
>>>>>>> 5c69093204269f08d8477fd9173cba488f65acd5
    form.append("subject", `📷 Photoshoot request: ${name} - ${contact} 🔔`);
    form.append("text", details);

    fetch(
<<<<<<< HEAD
      "https://api.mailgun.net/v3/sandbox791d34e1ca884f5288f995d9c2aca955.mailgun.org/messages",
=======
      "https://api.mailgun.net/v3/sandbox662797646cd5414eb52d4252024ed199.mailgun.org/messages",
>>>>>>> 5c69093204269f08d8477fd9173cba488f65acd5
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
<<<<<<< HEAD
            btoa("api:34361baa9a215af31039e1c8b9052bfe-262b213e-e2755b10"),
=======
            btoa("api:e8ef59e7f2b4559080df5abbc2fbd4dc-262b213e-1f6521bf"),
>>>>>>> 5c69093204269f08d8477fd9173cba488f65acd5
        },
        body: form,
      }
    )
      .then((_) => setIsSent(true))
      .catch((err) => setIsError(true));
  };

  return (
    <div
      id="book-popover"
      className={cn(
        "z-40 backdrop-blur-xl transition-opacity w-full h-full fixed flex justify-center items-center",
        open
          ? "opacity-100 bg-white/[.15] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "opacity-0 top-full"
      )}
    >
      <form
        className="bg-accent p-10 w-10/12 md:w-[30rem] grid gap-7 relative h-fit"
        onSubmit={handleSubmit}
      >
        <img
          src={blister}
          className="absolute -top-3 left-1/2 w-44 -translate-x-1/2 -translate-y-1/2"
        />
        <h1 className="text-white font-secondary text-2xl md:text-4xl text-center ">
          order a photosession
        </h1>
        <p className="font-primary text-secondary text-center pb-3 md:pb-5 lg:pb-10">
          to contact me, fill out the form below and leave your contacts and
          order details
        </p>
        <input
          type="text"
          placeholder="your contacts"
          className="bg-accent text-secondary placeholder:text-secondary border-b-2 pb-2 border-secondary mb-2 md:mb-5 focus:outline-none"
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="your name"
          className="bg-accent text-secondary placeholder:text-secondary border-b-2 pb-2 border-secondary mb-2 md:mb-5 focus:outline-none"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="your order details"
          className="bg-accent text-secondary placeholder:text-secondary border-b-2 pb-2 border-secondary mb-2 md:mb-5 focus:outline-none"
          onChange={(e) => setDetails(e.target.value)}
        />
        <div className="flex items-center justify-center gap-10">
          {isSent && (
            <p className="font-primary text-white text-lg">Appointment sent!</p>
          )}
          <button
            className="font-secondary text-white text-3xl bg-secondary hover:bg-secondary/90 px-14 py-2 w-fit disabled:bg-secondary/80 transition-colors"
            disabled={contact === "" || name === "" || details === ""}
          >
            {isSent ? "close" : "send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookPopover;
