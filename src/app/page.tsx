'use client';

import { useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { GraduationCap, Building2, Search } from 'lucide-react';
import registerStudent from '@/app/actions/registerStudent';
import registerEntity from '@/app/actions/registerEntity';
import loginStudent from '@/app/actions/loginStudent';
import loginEntity from '@/app/actions/loginEntity';

type FormData = {
  nome?: string;
  cognome?: string;
  dataNascita?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

type ActionMode = 'register' | 'login';
type UserType = 'student' | 'entity';

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    dataNascita: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [userType, setUserType] = useState<UserType | null>(null);
  const [actionMode, setActionMode] = useState<ActionMode>('register');
  const [showForm, setShowForm] = useState(false);
  const [showVerifyBox, setShowVerifyBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const router = useRouter();

  type MessageStateV =
  | { type: "error"; text: string }
  | {
      type: "success";
      text: string;
      cert: {
        title: string;
        description: string;
        data_rilascio: string;
        ente: string;
        studente: string;
        nascita: string;
      };
    };


  const [messageV, setMessageV] = useState<MessageStateV | null>(null);

  


  const validatePassword = (pw: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pw);
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const resetForm = () => {
    setFormData({ nome: '', cognome: '', dataNascita: '', email: '', password: '', confirmPassword: '' });
    setMessage(null);
    setShowVerifyBox(false); 
    setMessageV(null);          
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    if (!validateEmail(formData.email)) {
      setMessage({ type: 'error', text: 'Email non valida' });
      setLoading(false);
      return;
    }
    if (actionMode === 'register') {
      if (formData.password !== formData.confirmPassword) {
        setMessage({ type: 'error', text: 'Le password non coincidono' });
        setLoading(false);
        return;
      }
      if (!validatePassword(formData.password)) {
        setMessage({ type: 'error', text: 'La password deve avere almeno 8 caratteri, una maiuscola, una minuscola, un numero e un simbolo.' });
        setLoading(false);
        return;
      }
    }

    try {
      if (actionMode === 'register') {
        if (userType === 'student') {
          await registerStudent({
            nome: formData.nome!,
            cognome: formData.cognome!,
            dataNascita: formData.dataNascita!,
            email: formData.email,
            password: formData.password,
          });
        } else {
          await registerEntity({
            nome: formData.nome!,
            email: formData.email,
            password: formData.password,
          });
        }
        setMessage({ type: 'success', text: 'Registrazione avvenuta con successo!' });
      } else {
        if (userType === 'student') {
          await loginStudent({ email: formData.email, password: formData.password });
          localStorage.setItem("userEmail", formData.email); // 🔑 salvo sessione
          router.push('/dashboard-student');
        } else {
          await loginEntity({ email: formData.email, password: formData.password });
          localStorage.setItem("userEmail", formData.email); // 🔑 salvo sessione
          router.push('/dashboard-entity');
        }
      }

      setTimeout(() => {
        resetForm();
        setShowForm(false);
        setUserType(null);
      }, 3000);
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      setMessage({ type: 'error', text: msg || 'Errore generico.' });
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-700 text-white flex flex-col">
      <header className="p-6 text-center text-5xl md:text-6xl font-extrabold tracking-tight">UniChain</header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-12">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            La tua identità accademica sulla Blockchain
          </h1>
          <p className="text-lg text-gray-200 mb-4">Registrazione e verifica dei certificati in modo trasparente e sicuro.</p>
        </div>
        <Image
          src="https://www.netgroup.it/wp-content/uploads/2023/04/Blockchain-Technology_2.jpg"
          alt="Blockchain"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl object-cover"
          priority
        />
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12 text-center">
        {['entity', 'student'].map(type => (
          <div key={type} className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-3 text-indigo-700">
              {type === 'student' ? <GraduationCap size={32} /> : <Building2 size={32} />}
              <h2 className="text-3xl font-bold">{type === 'student' ? 'Studenti' : 'Enti'}</h2>
            </div>
            <p className="mb-6">
              {type === 'student'
                ? 'Consulta e gestisci i tuoi certificati accademici.'
                : 'Crea, gestisci e assegna certificati accademici.'}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => { resetForm(); setShowForm(true); setUserType(type as UserType); setActionMode('register'); }}
                className="bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-800"
              >
                Registrati
              </button>
              <button
                onClick={() => { resetForm(); setShowForm(true); setUserType(type as UserType); setActionMode('login'); }}
                className="border border-indigo-700 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100"
              >
                Login
              </button>
            </div>
          </div>
        ))}

        {/* Verifica certificati */}
        <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-3 text-green-600">
            <Search size={32} /><h2 className="text-3xl font-bold">Verifica</h2>
          </div>
          <p className="mb-6">Inserisci l&apos;ID del certificato per verificarne l&apos;autenticità.</p>
          <button
            onClick={() => { resetForm();setShowVerifyBox(true)}}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Verifica Certificato
          </button>
        </div>
      </section>

      {/* Form Login/Register */}
      {showForm && (
        <section className="bg-white text-gray-900 p-6 rounded-xl shadow-xl mx-auto mb-12 w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4">
            {actionMode === 'register' ? 'Registrazione' : 'Login'} {userType === 'student' ? 'Studente' : 'Ente'}
          </h2>

          <form className="flex flex-col gap-3 mt-4" onSubmit={handleSubmit}>
            {actionMode === 'register' && userType === 'student' && (
              <>
                <input name="nome" onChange={handleChange} value={formData.nome || ''} type="text" placeholder="Nome" className="border p-2 rounded" required />
                <input name="cognome" onChange={handleChange} value={formData.cognome || ''} type="text" placeholder="Cognome" className="border p-2 rounded" required />
                <input name="dataNascita" onChange={handleChange} value={formData.dataNascita || ''} type="date" className="border p-2 rounded" required />
              </>
            )}
            {actionMode === 'register' && userType === 'entity' && (
              <input name="nome" onChange={handleChange} value={formData.nome || ''} type="text" placeholder="Nome Ente" className="border p-2 rounded" required />
            )}

            <input name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Email" className="border p-2 rounded" required />
            <input name="password" onChange={handleChange} value={formData.password} type="password" placeholder="Password" className="border p-2 rounded" required />
            {actionMode === 'register' && (
              <input name="confirmPassword" onChange={handleChange} value={formData.confirmPassword || ''} type="password" placeholder="Conferma Password" className="border p-2 rounded" required />
            )}

            {message && (
              <div className={`${message.type === 'error' ? 'text-red-600' : 'text-green-600'} text-sm`}>
                {message.text}
              </div>
            )}

            <button type="submit" disabled={loading} className="bg-indigo-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-800">
              {loading ? 'Elaborazione...' : actionMode === 'register' ? 'Registrati' : 'Accedi'}
            </button>
          </form>

          <button onClick={() => { setShowForm(false); resetForm(); }} className="mt-4 text-sm text-gray-600 underline">
            Annulla
          </button>
        </section>
      )}

      {/* Box verifica */}
      {showVerifyBox && (
        <section className="bg-white text-gray-900 p-6 rounded-xl shadow-xl mx-auto mb-12 w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Verifica Certificato</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const input = form.querySelector<HTMLInputElement>('input');
              const txId = input?.value.trim();

              if (!txId) {
                setMessage({ type: "error", text: "Inserisci un ID valido." });
                return;
              }

              try {
                // 1. Cerco il certificato
                const { data: cert, error: certErr } = await supabase
                  .from("certificates")
                  .select("*")
                  .eq("blockchain_tx", txId)
                  .maybeSingle();

                if (certErr) throw certErr;

                if (!cert) {
                  setMessage({ type: "error", text: "❌ Certificato non trovato." });
                  return;
                }

                // 2. Cerco studente
                const { data: stud } = await supabase
                  .from("users")
                  .select("nome, cognome, data_nascita")
                  .eq("id", cert.student_id)
                  .single();

                // 3. Cerco ente
                const { data: ent } = await supabase
                  .from("entities")
                  .select("nome_ente")
                  .eq("id", cert.entity_id)
                  .single();

                // 4. Mostro risultato
                setMessageV({
                  type: "success",
                  text: "✅ Certificato valido!",
                  cert: {
                    title: cert.title,
                    description: cert.description,
                    data_rilascio: cert.issued_date,
                    ente: ent?.nome_ente ?? "N/A",
                    studente: stud ? `${stud.nome} ${stud.cognome}` : "N/A",
                    nascita: stud?.data_nascita ?? "N/A",
                  },
                }); 
              } catch (err) {
                console.error(err);
                setMessage({ type: "error", text: "Errore durante la verifica." });
              }
            }}
          >
            <input
              type="text"
              placeholder="Incolla l'id del certificato"
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Verifica
            </button>
          </form>

          {messageV && (
            <div className="mt-4">
              <p
                className={`text-sm ${
                  messageV.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {messageV.text}
              </p>

              {messageV.type === "success" && (
                <div className="bg-gray-100 p-3 rounded-lg text-gray-800 mt-3">
                  <p><strong>Titolo:</strong> {messageV.cert.title}</p>
                  <p><strong>Descrizione:</strong> {messageV.cert.description}</p>
                  <p><strong>Data rilascio:</strong> {messageV.cert.data_rilascio}</p>
                  <p><strong>Ente:</strong> {messageV.cert.ente}</p>
                  <p><strong>Studente:</strong> {messageV.cert.studente}</p>
                  <p><strong>Data di nascita:</strong> {messageV.cert.nascita}</p>
                </div>
              )}
            </div>
          )}

           <button
              onClick={() => {setShowVerifyBox(false); resetForm(); }} 
              className="mt-4 text-sm text-gray-600 underline"
            >
              Annulla
            </button>
          </section>
      )}



      <footer className="text-center py-4 text-sm text-gray-300 border-t border-gray-600">
        © 2025 UniChain - Tutti i diritti riservati
      </footer>
    </main>
  );
}
