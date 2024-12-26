"use client";
import SubscriptiontableItem from "@/app/Components/AdminComponent/SubscriptiontableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);

  const fechEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: { id: mongoId },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fechEmails();
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fechEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl:16">
      <h1>All subscription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email subscription
              </th>
              <th scope="col" className="px-6 py-3 hidden sm:block">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubscriptiontableItem
                  key={index}
                  deleteEmail={deleteEmail}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                />
              );
            })}
            <SubscriptiontableItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
