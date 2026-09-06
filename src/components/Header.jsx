import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Send,
  UserRound,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

const initialQuoteForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
function DesktopHashLink({ text, to }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <HashLink
        smooth
        to={to}
        className="
          group relative
          font-medium text-gray-800
          transition-colors duration-300
          hover:text-cyan-600
        "
      >
        {text}

        <span
          className="
            absolute -bottom-2 left-0
            h-[2px] w-0
            bg-gradient-to-r from-pink-500 to-cyan-400
            transition-all duration-300
            group-hover:w-full
          "
        />
      </HashLink>
    </motion.div>
  );
}
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [materialOpen, setMaterialOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openQuotePopup = () => {
    setMenuOpen(false);
    setQuoteOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6">
          <div className="flex h-16 items-center justify-between sm:h-20 2xl:h-24">
            {/* Logo */}

            <motion.a
              href="/#home"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Thirumala Construction"
                className="h-12 w-auto object-contain sm:h-16 2xl:h-20"
              />
            </motion.a>

            {/* Desktop Menu */}

            <nav className="hidden items-center gap-5 text-sm 2xl:flex">
                <DesktopHashLink text="Home" to="/#home" />

                  <DesktopHashLink text="About" to="/#about" />            
              <NavLink text="Construction" href="/construction" />

              <Dropdown title="Our Manufacturing Products">
                <DropdownItem
                  text="Fly Ash Bricks"
                  to="/manufacturing-products/fly-ash-bricks"
                />

                <DropdownItem
                  text="Solid Blocks"
                  to="/manufacturing-products/solid-blocks"
                />


                <DropdownItem
                  text="Septic Tank Ring"
                  to="/manufacturing-products/septictank-ring"
                />
              

              </Dropdown>

              <Dropdown title="Building Materials">
                <DropdownItem
                  text="M Sand"
                  to="/building-materials/m-sand"
                />

                <DropdownItem
                  text="P Sand"
                  to="/building-materials/p-sand"
                />

                <DropdownItem
                  text="River Sand"
                  to="/building-materials/river-sand"
                />

                <DropdownItem
                  text="Cement"
                  to="/building-materials/cement"
                />

                <DropdownItem
                  text="Red Bricks"
                  to="/building-materials/red-bricks"
                />

                <DropdownItem
                  text="AAC Block"
                  to="/building-materials/aac-block"
                />

                <DropdownItem
                  text="Interlock Mud Bricks"
                  to="/building-materials/interlock-mud-bricks"
                />

                <DropdownItem
                  text="Jalli"
                  to="/building-materials/jalli"
                />

                <DropdownItem
                  text="Quarry Stone"
                  to="/building-materials/quarry-stone"
                />

                <DropdownItem
                  text="Gravel"
                  to="/building-materials/gravel"
                />
              </Dropdown>

              <NavLink text="Projects" href="/projects" />

              <DesktopHashLink text="Contact" to="/#contact" />            </nav>

            {/* Desktop Quote Button */}

            <motion.button
              type="button"
              onClick={openQuotePopup}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 30px rgba(236, 72, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                hidden items-center gap-2
                rounded-lg
                bg-gradient-to-r
                from-pink-600 via-pink-500 to-cyan-400
                px-6 py-3
                font-semibold text-white
                2xl:flex
              "
            >
              Get a Quote
              <ArrowRight size={18} />
            </motion.button>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                text-slate-800
                transition-colors
                hover:bg-slate-100
                2xl:hidden
              "
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={29} /> : <Menu size={29} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{ duration: 0.3 }}
              className="
                overflow-hidden
                border-t border-slate-100
                bg-white
                xl:hidden
              "
            >
              <div className="flex flex-col gap-2 px-4 py-4 sm:px-6 sm:py-5">
                <MobileAnchor
                  text="Home"
                  href="/#home"
                  onClick={() => setMenuOpen(false)}
                />

                <MobileAnchor
                  text="About"
                  href="/#about"
                  onClick={() => setMenuOpen(false)}
                />
                <MobileAnchor
                  text="Construction"
                  href="/construction"
                  onClick={() => setMenuOpen(false)}
                />

                {/* Mobile Manufacturing Dropdown */}

                <button
                  type="button"
                  onClick={() => setProductOpen(!productOpen)}
                  className="
                    flex items-center justify-between
                    font-medium text-slate-800
                  "
                >
                  Our Manufacturing Products

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      productOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {productOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="
                        ml-2 flex flex-col gap-1
                        overflow-hidden
                        border-l-2 border-cyan-400
                        pl-4
                      "
                    >
                      <MobileRouterLink
                        text="Fly Ash Bricks"
                        to="/manufacturing-products/fly-ash-bricks"
                        onClick={() => setMenuOpen(false)}
                      />

                      <MobileRouterLink
                        text="Solid Blocks"
                        to="/manufacturing-products/solid-blocks"
                        onClick={() => setMenuOpen(false)}
                      />

                      <MobileRouterLink
                        text="Septictank Rings"
                        to="/manufacturing-products/septictank-ring"
                        onClick={() => setMenuOpen(false)}
                      />


                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Building Materials Dropdown */}

                <button
                  type="button"
                  onClick={() => setMaterialOpen(!materialOpen)}
                  className="
                    flex items-center justify-between
                    font-medium text-slate-800
                  "
                >
                  Building Materials

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      materialOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {materialOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="
                        ml-2 flex flex-col gap-1
                        overflow-hidden
                        border-l-2 border-pink-500
                        pl-4
                      "
                    >
                      <MobileRouterLink
                        text="M Sand"
                        to="/building-materials/m-sand"
                        onClick={() => setMenuOpen(false)}
                      />

                      <MobileRouterLink
                        text="P Sand"
                        to="/building-materials/p-sand"
                        onClick={() => setMenuOpen(false)}
                      />

                      <MobileRouterLink
                        text="River Sand"
                        to="/building-materials/river-sand"
                        onClick={() => setMenuOpen(false)}
                      />

                      <MobileRouterLink
                        text="Cement"
                        to="/building-materials/cement"
                        onClick={() => setMenuOpen(false)}
                      />
                      <MobileRouterLink
                        text="Red Bricks"
                        to="/building-materials/red-bricks"
                        onClick={() => setMenuOpen(false)}
                      />
                      <MobileRouterLink
                        text="AAC Block"
                        to="/building-materials/aac-block"
                        onClick={() => setMenuOpen(false)}
                      />
                      <MobileRouterLink
                        text="Interlock Mud Bricks"
                        to="/building-materials/interlock-mud-bricks"
                        onClick={() => setMenuOpen(false)}
                      />
                      <MobileRouterLink
                        text="Jalli"
                        to="/building-materials/jalli"
                        onClick={() => setMenuOpen(false)}
                      />
                      <MobileRouterLink
                        text="Quarry Stone"
                        to="/building-materials/quarry-stone"
                        onClick={() => setMenuOpen(false)}
                      />
                        <MobileRouterLink
                        text="Gravel"
                        to="/building-materials/gravel"
                        onClick={() => setMenuOpen(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* <MobileRouterLink
                  text="Projects"
                  to="/Projects"
                  onClick={() => setMenuOpen(false)}
                /> */}

                <MobileAnchor
                  text="Projects"
                  href="/Projects"
                  onClick={() => setMenuOpen(false)}
                />

                <MobileAnchor
                  text="Contact"
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                />

                {/* Mobile Quote Button */}

                <motion.button
                  type="button"
                  onClick={openQuotePopup}
                  whileTap={{ scale: 0.97 }}
                  className="
                    mt-2
                    flex items-center justify-center gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-pink-600 via-pink-500 to-cyan-400
                    px-5 py-3.5
                    font-semibold text-white
                  "
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Quote Popup */}

      <QuotePopup
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}

/* =========================================
   DESKTOP NAVIGATION LINK
========================================= */

function NavLink({ text, href }) {
  const isRoute = href.startsWith("/");

  const className =
    "relative group font-medium text-gray-800 transition-colors hover:text-cyan-600";

  const content = (
    <>
      {text}

      <span
        className="
          absolute -bottom-2 left-0
          h-[2px] w-0
          bg-gradient-to-r from-pink-500 to-cyan-400
          transition-all duration-300
          group-hover:w-full
        "
      />
    </>
  );

  if (isRoute) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={href} className={className}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {content}
    </motion.a>
  );
}


/* =========================================
   DESKTOP DROPDOWN
========================================= */

function Dropdown({ title, children }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="
          flex items-center gap-1
          font-medium text-gray-800
          transition-colors
          group-hover:text-cyan-600
        "
      >
        {title}

        <ChevronDown
          size={17}
          className="
            transition-transform duration-300
            group-hover:rotate-180
          "
        />
      </button>

      <div
        className="
          invisible absolute left-0 top-full
          z-50
          translate-y-3
          pt-5
          opacity-0
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <div
          className="
            w-64 overflow-hidden
            rounded-xl
            border border-gray-100
            bg-white
            shadow-2xl
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownItem({ text, to }) {
  return (
    <Link
      to={to}
      className="
        block
        border-b border-slate-50
        px-5 py-4
        text-sm text-gray-700
        transition-all
        last:border-b-0
        hover:translate-x-1
        hover:bg-gradient-to-r
        hover:from-pink-50
        hover:to-cyan-50
        hover:text-cyan-600
      "
    >
      {text}
    </Link>
  );
}

/* =========================================
   MOBILE LINKS
========================================= */

function MobileAnchor({ text, href, onClick }) {
  return (
    <HashLink
      smooth
      to={href}
      onClick={onClick}
      className="
        rounded-lg
        px-2 py-2
        font-medium text-gray-800
        transition-all duration-300
        hover:bg-cyan-50
        hover:text-cyan-600
        active:scale-[0.98]
        active:bg-cyan-100
      "
    >
      {text}
    </HashLink>
  );
}

function MobileRouterLink({ text, to, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        block w-full
        rounded-lg
        px-3 py-3
        text-sm text-gray-700
        transition-all duration-200
        hover:bg-cyan-50
        hover:text-cyan-600
        active:scale-[0.98]
        active:bg-cyan-100
      "
    >
      {text}
    </Link>
  );
}

/* =========================================
   QUOTE POPUP
========================================= */

function QuotePopup({ open, onClose }) {
  const [form, setForm] = useState(initialQuoteForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    const phoneDigits = form.phone.replace(/\D/g, "");

    if (form.name.trim().length < 2) {
      validationErrors.name = "Please enter your name";
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      validationErrors.phone =
        "Please enter a valid phone number";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      validationErrors.email =
        "Please enter a valid email address";
    }

    if (form.message.trim().length < 10) {
      validationErrors.message =
        "Please enter your project requirement";
    }

    return validationErrors;
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  const validationErrors = validateForm();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  try {
      const apiUrl =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

    const response = await fetch(`${apiUrl}/api/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.status === 422 && data.errors) {
      setErrors(data.errors);
      return;
    }

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to send enquiry"
      );
    }

    setSubmitted(true);
    setForm(initialQuoteForm);
    setErrors({});
  } catch (error) {
    console.error("Quote form error:", error);

    alert(
      error.message ||
        "Something went wrong. Please try again."
    );
  }
};
    


  const closePopup = () => {
    setErrors({});
    setSubmitted(false);
    setForm(initialQuoteForm);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            p-4 md:p-6
          "
        >
          {/* Dark background */}

          <motion.div
            className="
              absolute inset-0
              bg-slate-950/75
              backdrop-blur-md
            "
            onClick={closePopup}
          />

          {/* Popup container */}

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Get a construction quote"
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.94,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              max-h-[92vh] w-full max-w-4xl
              overflow-y-auto
              rounded-3xl
              bg-white
              shadow-2xl
            "
          >
            {/* Top gradient */}

            <div
              className="
                h-2
                bg-gradient-to-r
                from-pink-600 via-pink-500 to-cyan-400
              "
            />

            {/* Close button */}

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close quote form"
              className="
                absolute right-5 top-5 z-20
                flex h-11 w-11
                items-center justify-center
                rounded-full
                bg-slate-900
                text-white
                transition-all duration-300
                hover:rotate-90
                hover:bg-pink-600
              "
            >
              <X size={21} />
            </button>

            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              {/* Popup left side */}

              <div
                className="
                  relative hidden
                  min-h-[600px]
                  flex-col justify-between
                  overflow-hidden
                  bg-slate-950
                  p-9
                  text-white
                  md:flex
                "
              >
                <div
                  className="
                    absolute -left-20 -top-20
                    h-52 w-52 rounded-full
                    border-[35px] border-cyan-400/10
                  "
                />

                <div
                  className="
                    absolute -bottom-16 -right-16
                    h-48 w-48 rounded-full
                    border-[32px] border-pink-500/10
                  "
                />

                <div className="relative z-10">
                  <span
                    className="
                      mb-5 inline-block
                      rounded-full
                      border border-cyan-400/20
                      bg-cyan-400/10
                      px-4 py-2
                      text-[11px] font-bold
                      tracking-[2px]
                      text-cyan-300
                    "
                  >
                    FREE CONSULTATION
                  </span>

                  <h2 className="mb-5 text-4xl font-bold leading-tight">
                    Let&apos;s Build Your

                    <span className="block text-pink-500">
                      Dream Project
                    </span>
                  </h2>

                  <p className="text-sm leading-7 text-slate-300">
                    உங்கள் construction requirement-ஐ எங்களிடம்
                    பகிருங்கள். எங்கள் team விரைவில் உங்களைத்
                    தொடர்புகொள்ளும்.
                  </p>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-white/10
                        text-cyan-300
                      "
                    >
                      <Phone size={18} />
                    </span>

                    <div>
                      <small className="block text-slate-400">
                        Call Us
                      </small>

                      <strong className="text-sm">
                        +91 94422 55664
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-white/10
                        text-pink-400
                      "
                    >
                      <CheckCircle2 size={18} />
                    </span>

                    <div>
                      <small className="block text-slate-400">
                        Our Promise
                      </small>

                      <strong className="text-sm">
                        Quality & Trusted Service
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form side */}

              <div className="p-6 pt-16 sm:p-8 sm:pt-16 md:p-10">
                {!submitted ? (
                  <>
                    <div className="mb-7">
                      <span
                        className="
                          text-xs font-bold
                          tracking-[2px]
                          text-pink-600
                        "
                      >
                        GET A FREE QUOTE
                      </span>

                      <h3
                        className="
                          mb-2 mt-2
                          text-3xl font-bold
                          text-slate-900
                        "
                      >
                        Tell Us About Your Project
                      </h3>

                      <p className="text-sm leading-6 text-slate-500">
                        Fill out the details and our team will contact
                        you shortly.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <QuoteField
                        label="Your Name"
                        name="name"
                        value={form.name}
                        placeholder="Enter your full name"
                        icon={UserRound}
                        error={errors.name}
                        onChange={handleChange}
                        maxLength={60}
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <QuoteField
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          placeholder="Phone number"
                          icon={Phone}
                          error={errors.phone}
                          onChange={handleChange}
                           maxLength={16}
                        />

                        <QuoteField
                          label="Email Address"
                          name="email"
                          type="email"
                          value={form.email}
                          placeholder="Email address"
                          icon={Mail}
                          error={errors.email}
                          onChange={handleChange}
                          maxLength={100}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quote-message"
                          className="
                            mb-2 block
                            text-sm font-semibold
                            text-slate-700
                          "
                        >
                          Project Requirement
                        </label>

                        <div className="relative">
                          <MessageSquare
                            size={19}
                            className="
                              absolute left-4 top-4
                              text-cyan-500
                            "
                          />

                          <textarea
                            id="quote-message"
                            name="message"
                            rows="4"
                            value={form.message}
                            onChange={handleChange}
                            maxLength={1000}
                            placeholder="Tell us about your construction requirement..."
                            className={`
                              min-h-32 w-full resize-none
                              rounded-xl border
                              bg-slate-50
                              py-3.5 pl-12 pr-4
                              text-sm text-slate-800
                              outline-none
                              transition-all duration-300
                              focus:bg-white focus:ring-4
                              ${
                                errors.message
                                  ? "border-pink-500 focus:ring-pink-100"
                                  : "border-slate-200 focus:border-cyan-400 focus:ring-cyan-100"
                              }
                            `}
                          />
                        </div>

                        {errors.message && (
                          <small className="mt-1.5 block text-xs text-pink-600">
                            {errors.message}
                          </small>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="
                          flex w-full
                          items-center justify-center gap-2
                          rounded-xl
                          bg-gradient-to-r
                          from-pink-600 via-pink-500 to-cyan-400
                          px-6 py-4
                          text-sm font-bold text-white
                          shadow-lg shadow-pink-500/20
                        "
                      >
                        Submit Quote Request
                        <Send size={18} />
                      </motion.button>

                      <p className="text-center text-xs text-slate-400">
                        We use your information only to respond to this
                        enquiry.
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                      flex min-h-[450px]
                      flex-col items-center justify-center
                      text-center
                    "
                  >
                    <div
                      className="
                        mb-6 flex
                        h-20 w-20
                        items-center justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-cyan-400 to-cyan-600
                        text-white
                        shadow-xl shadow-cyan-500/25
                      "
                    >
                      <CheckCircle2 size={39} />
                    </div>

                    <h3 className="mb-3 text-3xl font-bold text-slate-900">
                      Thank You!
                    </h3>

                    <p className="max-w-sm text-sm leading-7 text-slate-500">
                      உங்கள் quotation request பெறப்பட்டது. எங்கள்
                      team விரைவில் உங்களைத் தொடர்புகொள்ளும்.
                    </p>

                    <button
                      type="button"
                      onClick={closePopup}
                      className="
                        mt-7
                        rounded-xl
                        bg-slate-900
                        px-7 py-3
                        text-sm font-semibold text-white
                        transition-colors
                        hover:bg-pink-600
                      "
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================
   QUOTE INPUT FIELD
========================================= */

function QuoteField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  icon: Icon,
  error,
  onChange,
  maxLength,

}) {
  return (
    <div>
      <label
        htmlFor={`quote-${name}`}
        className="
          mb-2 block
          text-sm font-semibold
          text-slate-700
        "
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={19}
          className="
            absolute left-4 top-1/2
            -translate-y-1/2
            text-cyan-500
          "
        />

        <input
          id={`quote-${name}`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`
            w-full
            rounded-xl border
            bg-slate-50
            py-3.5 pl-12 pr-4
            text-sm text-slate-800
            outline-none
            transition-all duration-300
            focus:bg-white focus:ring-4
            ${
              error
                ? "border-pink-500 focus:ring-pink-100"
                : "border-slate-200 focus:border-cyan-400 focus:ring-cyan-100"
            }
          `}
        />
      </div>

      {error && (
        <small className="mt-1.5 block text-xs text-pink-600">
          {error}
        </small>
      )}
    </div>
  );
}

export default Header;