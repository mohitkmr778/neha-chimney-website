"use client";

import React from "react";
import PageBanner from "@/components/homePage/PageBanner";

export default function ContactPage() {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = React.useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <>
            <PageBanner
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out for service, support, or any questions!"
                image="/slider/noida.jpg"
            />
            <main className="bg-[#ffffff] min-h-[60vh] py-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
                    <div className="bg-[#18344a] rounded-xl shadow-lg p-8 flex-1 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-[#ffb300] mb-4 text-center">
                            Get in Touch
                        </h2>
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-[#0d2235] text-white px-4 py-2 rounded border border-[#2c4a6b]"
                                required
                                value={form.name}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        name: e.target.value,
                                    }))
                                }
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-[#0d2235] text-white px-4 py-2 rounded border border-[#2c4a6b]"
                                required
                                value={form.email}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        email: e.target.value,
                                    }))
                                }
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="bg-[#0d2235] text-white px-4 py-2 rounded border border-[#2c4a6b]"
                                value={form.subject}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        subject: e.target.value,
                                    }))
                                }
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="bg-[#0d2235] text-white px-4 py-2 rounded border border-[#2c4a6b] resize-none"
                                required
                                value={form.message}
                                onChange={(e) =>
                                    setForm((f) => ({
                                        ...f,
                                        message: e.target.value,
                                    }))
                                }
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] text-white font-bold py-2 rounded hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                            >
                                Send Message
                            </button>
                            {status === "success" && (
                                <p className="text-green-400 text-center mt-2">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-center mt-2">
                                    Failed to send message. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg flex-1 min-h-[350px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.669321514375!2d77.5332012!3d28.5195951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebaff6eacec7%3A0x71ae2007ab869b76!2sAbhaya%20Chimney%20Service!5e0!3m2!1sen!2sin!4v1759483765560!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: 350 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </main>
        </>
    );
}
