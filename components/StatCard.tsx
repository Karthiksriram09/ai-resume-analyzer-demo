
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function StatCard({ title, value, children }:{ title:string; value?:string|number; children?:ReactNode }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-5"
    >
      <div className="text-sm uppercase tracking-wider text-white/70">{title}</div>
      {value !== undefined && <div className="text-3xl font-semibold mt-2">{value}</div>}
      {children}
    </motion.div>
  );
}
