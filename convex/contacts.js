// /convex/contacts.js
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// CREATE a new contact form entry
export const addContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // Add a timestamp to the contact entry
    const newData = {
      ...args,
      createdAt: Date.now(),
    };

    // Insert the new document into the "contacts" table
    const newContact = await ctx.db.insert("contacts", newData);

    // (Optional) Send an email or notification here
    // For example, using SendGrid:
    // await sendEmailUsingSendGrid(args);

    return newContact;
  },
});

// READ all contact form entries
export const getContactForms = query(async (ctx) => {
  return await ctx.db.query("contacts").collect();
});

// DELETE a contact entry by ID
export const deleteContactForm = mutation({
  args: {
    id: v.id("contacts"),
  },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
    return true;
  },
});

// UPDATE a contact entry by ID
export const updateContactForm = mutation({
  args: {
    id: v.id("contacts"),
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
    return true;
  },
});
