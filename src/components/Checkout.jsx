import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import "./Checkout.css";
import Footer from "./Footer";
function Checkout() {

  const navigate = useNavigate();
  const { cart, total,clearCart } = useContext(ShopContext);

  /* ================= STATE ================= */

  const [step, setStep] = useState(1);

  /* ADDRESS */

  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", text: "T Nagar, Chennai" },
    { id: 2, type: "Office", text: "Guindy, Chennai" }
  ]);

  const [selectedAddress, setSelectedAddress] = useState(1);

  /* PAYMENT */

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [cards, setCards] = useState([
    { id: 1, number: "**** 6669", name: "Raj", expiry: "12/26" }
  ]);

  const [showCardModal, setShowCardModal] = useState(false);

  const [cardForm, setCardForm] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  /* MODAL (ADDRESS) */

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    type: "",
    text: ""
  });

  /* ================= ADDRESS FUNCTIONS ================= */

  const saveAddress = () => {
    if (!form.text) return;

    if (editId) {
      setAddresses(prev =>
        prev.map(a =>
          a.id === editId ? { ...a, ...form } : a
        )
      );
    } else {
      setAddresses(prev => [
        ...prev,
        { id: Date.now(), ...form }
      ]);
    }

    setShowModal(false);
  };

  const deleteAddress = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
  };

  /* ================= CARD FUNCTIONS ================= */

  const saveCard = () => {
    if (!cardForm.number || !cardForm.name) return;

    const last4 = cardForm.number.slice(-4);

    const newCard = {
      id: Date.now(),
      number: `**** ${last4}`,
      name: cardForm.name,
      expiry: cardForm.expiry
    };

    setCards(prev => [...prev, newCard]);
    setPaymentMethod(newCard.id); // auto select new card

    setShowCardModal(false);

    setCardForm({
      number: "",
      name: "",
      expiry: "",
      cvv: ""
    });
  };

  const deleteCard = (id) => {
    setCards(prev => prev.filter(c => c.id !== id));
  };
const [paymentSuccess, setPaymentSuccess] = useState(false);
  /* ================= UI ================= */

  return (
    <>
      <Navbar />

      <div className="checkout-container">

        {/* HEADER */}
        <div className="checkout-header">
          <FaArrowLeft className="back" onClick={() => navigate(-1)} />
          <h2>Checkout</h2>
        </div>

        {/* STEPS */}
        <div className="steps">
          <div className={step >= 1 ? "step active" : "step"} onClick={() => setStep(1)}>Location</div>
          <div className={step >= 2 ? "step active" : "step"} onClick={() => setStep(2)}>Payment</div>
          <div className={step >= 3 ? "step active" : "step"} onClick={() => setStep(3)}>Summary</div>
        </div>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <div className="section">

            <h3>Addresses</h3>

            {addresses.map(addr => (
              <div key={addr.id} className="option">

                <input
                  type="radio"
                  checked={selectedAddress === addr.id}
                  onChange={() => setSelectedAddress(addr.id)}
                />

                <div className="addr-text">
                  <strong>{addr.type}</strong>
                  <p>{addr.text}</p>
                </div>

                <div className="actions">
                  <FaEdit onClick={() => {
                    setShowModal(true);
                    setEditId(addr.id);
                    setForm({ type: addr.type, text: addr.text });
                  }} />

                  <FaTrash onClick={() => deleteAddress(addr.id)} />
                </div>

              </div>
            ))}

            <button
              className="outline-btn"
              onClick={() => {
                setShowModal(true);
                setEditId(null);
                setForm({ type: "", text: "" });
              }}
            >
              + Add Address
            </button>

            <button onClick={() => setStep(2)} className="next-btn">
              Continue
            </button>

          </div>
        )}

        {/* ================= STEP 2 ================= */}

        {step === 2 && (
          <div className="section">

            <h3>Payment Method</h3>

            {/* CASH */}
            <div className="option">
              <input
                type="radio"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              <span>Cash</span>
            </div>

            {/* WALLET */}
            <div className="option">
              <input
                type="radio"
                checked={paymentMethod === "wallet"}
                onChange={() => setPaymentMethod("wallet")}
              />
              <span>Wallet</span>
            </div>

            {/* CARDS */}
            <h4>Cards</h4>

            {cards.map(card => (
              <div key={card.id} className="option">

                <input
                  type="radio"
                  checked={paymentMethod === card.id}
                  onChange={() => setPaymentMethod(card.id)}
                />

                <span>{card.number} ({card.name})</span>

                <div className="actions">
                  <FaTrash onClick={() => deleteCard(card.id)} />
                </div>

              </div>
            ))}

            <button className="outline-btn" onClick={() => setShowCardModal(true)}>
              + Add Card
            </button>

            {/* MORE OPTIONS */}
            <h4>More Payment Options</h4>

            <div className="option">
              <input
                type="radio"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <span>Paypal</span>
            </div>

            <div className="option">
              <input
                type="radio"
                checked={paymentMethod === "apple"}
                onChange={() => setPaymentMethod("apple")}
              />
              <span>Apple Pay</span>
            </div>

            <div className="option">
              <input
                type="radio"
                checked={paymentMethod === "gpay"}
                onChange={() => setPaymentMethod("gpay")}
              />
              <span>Google Pay</span>
            </div>

            <button onClick={() => setStep(3)} className="next-btn">
              Continue
            </button>

          </div>
        )}

        {/* ================= STEP 3 ================= */}

        {step === 3 && (
          <div className="section">

            <h3>Order Summary</h3>

            {cart.map(item => (
              <div key={item.id} className="summary-card">
                <img
  src={item.image}
  alt={item.name}
/>      

                <div>
                  <h4>{item.name}</h4>
                  <p>Qty: {item.qty}</p>
                  <p>₹ {item.price}</p>
                </div>
              </div>
            ))}

            <h2 className="total">Total: ₹ {total}</h2>

            <p>
              Payment:
              {
                paymentMethod === "cash" ? " Cash" :
                  paymentMethod === "wallet" ? " Wallet" :
                    paymentMethod === "paypal" ? " PayPal" :
                      paymentMethod === "apple" ? " Apple Pay" :
                        paymentMethod === "gpay" ? " Google Pay" :
                          typeof paymentMethod === "number"
                            ? cards.find(c => c.id === paymentMethod)?.number
                            : ""
              }
            </p>

           <button
  className="pay-btn"
  onClick={() => {setPaymentSuccess(true);
    clearCart();
}}
>
  Pay Now
</button>

          </div>
        )}

      </div>

      {/* ADDRESS MODAL */}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">

            <h3>{editId ? "Edit Address" : "Add Address"}</h3>

            <input
              placeholder="Type (Home / Office)"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />

            <textarea
              placeholder="Enter full address"
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
            />

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={saveAddress}>Save</button>
            </div>

          </div>
        </div>
      )}

      {/* CARD MODAL */}

      {showCardModal && (
        <div className="modal-overlay">
          <div className="modal">

            <h3>Add Card</h3>

            <input
              placeholder="Card Number"
              value={cardForm.number}
              onChange={(e) =>
                setCardForm({ ...cardForm, number: e.target.value })
              }
            />

            <input
              placeholder="Card Holder Name"
              value={cardForm.name}
              onChange={(e) =>
                setCardForm({ ...cardForm, name: e.target.value })
              }
            />

            <input
              placeholder="Expiry (MM/YY)"
              value={cardForm.expiry}
              onChange={(e) =>
                setCardForm({ ...cardForm, expiry: e.target.value })
              }
            />

            <input
              placeholder="CVV"
              value={cardForm.cvv}
              onChange={(e) =>
                setCardForm({ ...cardForm, cvv: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={() => setShowCardModal(false)}>Cancel</button>
              <button onClick={saveCard}>Save Card</button>
            </div>

          </div>
        </div>
      )}

{paymentSuccess && (
  <div className="success-overlay">

    <div className="success-popup">

      <div className="tick-circle">✔</div>

      <h2>Payment Successful !</h2>
      <p>Thank you for purchase</p>

      <button
        className="home-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>

    </div>

  </div>
)}
 <Footer />
    </>
  );
}

export default Checkout;