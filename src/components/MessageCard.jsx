import React, { useState } from 'react'

export default function MessageCard({ message, onMessageChange, recipientName, onRecipientChange }) {
  return (
    <section className="message-section" id="message">
      <div className="section-header">
        <h2>Add a Sweet Note</h2>
        <p className="section-desc">Write a heartfelt message to go with your bouquet.</p>
      </div>

      <div className="message-card-wrapper">
        <div className="note-card-container">
          <img
            src="/note-card.png"
            alt="Note card"
            className="message-card-img"
          />

          <div className="note-to">
            <label>To:</label>
            <input
              type="text"
              placeholder="Someone special..."
              value={recipientName}
              onChange={e => onRecipientChange(e.target.value)}
              maxLength={40}
            />
          </div>

          <div className="note-message">
            <textarea
              placeholder="Write something from the heart..."
              value={message}
              onChange={e => onMessageChange(e.target.value)}
              rows={3}
              maxLength={200}
            />
          </div>

          <div className="note-from">
            <label>With love,</label>
            <input
              type="text"
              placeholder="Your name"
              maxLength={30}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
