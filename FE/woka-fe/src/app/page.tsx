import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/ui/Navbar';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32">
        {/* Asymmetrical Background Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-woka-orange rounded-full mix-blend-multiply opacity-10 blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-woka-pink rounded-full mix-blend-multiply opacity-10 blur-[100px] -z-10 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-woka-blue rounded-full mix-blend-multiply opacity-10 blur-[100px] -z-10 -translate-x-1/2"></div>

        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-3/5 flex flex-col items-start">
            <h1 className="font-display font-extrabold text-[3rem] leading-[1.05] md:text-[5rem] tracking-tight text-on-surface mb-8">
              <span className="block font-light text-on-surface-variant mb-2 text-[2rem] md:text-[3rem]">
                Solusi Digital & Akademik
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-woka-orange via-woka-pink to-woka-blue">
                One-Stop
              </span>
              <span className="block font-medium mt-2">
                untuk Masa Depan.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed font-sans">
              Dari pengembangan website mutakhir hingga pendampingan tugas kuliah komprehensif. WOKA memadukan kreativitas dan presisi untuk membantu Anda mencapai target dengan profesional.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" variant="primary" className="shadow-xl shadow-on-surface/10">Lihat Portfolio</Button>
              <Button size="lg" variant="ghost" className="bg-white/70 backdrop-blur-md shadow-sm border border-white/50">Konsultasi Gratis</Button>
            </div>
          </div>

          <div className="w-full md:w-2/5 hidden md:flex justify-center items-center h-[500px]">
            <div className="relative w-full h-full bg-white/70 backdrop-blur-md rounded-[3rem] overflow-hidden shadow-2xl border border-white/40 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-woka-orange/20 via-woka-pink/20 to-woka-blue/20 opacity-50"></div>
              <Image 
                src="/logo.png" 
                alt="WOKA Logo" 
                width={150} 
                height={150} 
                className="relative z-10 drop-shadow-2xl opacity-90 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface-container-low/50 relative" id="services">
        <div className="absolute top-40 left-10 w-96 h-96 bg-woka-orange rounded-full mix-blend-multiply opacity-5 blur-[100px] -z-10"></div>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-woka-pink font-semibold uppercase tracking-wider mb-4 block text-sm">
                Keahlian Kami
              </span>
              <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-on-surface tracking-tight">
                Solusi komprehensif, <br/>
                <span className="font-light text-on-surface-variant">
                  dirancang khusus untuk Anda.
                </span>
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Web Dev */}
            <div className="md:col-span-7">
              <Card hoverable className="h-full p-10 md:p-12 rounded-[2rem] border border-surface-variant/60 group">
                <div className="absolute -right-32 -top-32 w-96 h-96 bg-woka-orange/10 rounded-full blur-3xl group-hover:bg-woka-orange/20 transition-colors duration-700"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center text-woka-orange mb-10 border border-surface-variant/40 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  {/* Icon placeholder (desktop_mac) */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4 text-on-surface">
                  Web Development
                </h3>
                <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                  Website modern, cepat, dan responsif. Kami membangun pengalaman digital <i className="italic">bespoke</i> yang mengangkat identitas brand Anda ke level berikutnya.
                </p>
              </Card>
            </div>

            {/* Mobile App */}
            <div className="md:col-span-5">
              <Card hoverable className="h-full p-10 md:p-12 rounded-[2rem] border border-surface-variant/60 group">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-woka-pink/10 rounded-full blur-3xl group-hover:bg-woka-pink/20 transition-colors duration-700"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center text-woka-pink mb-10 border border-surface-variant/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {/* Icon placeholder (phone_iphone) */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="font-display text-3xl font-bold mb-4 text-on-surface">
                  Mobile App
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Aplikasi iOS & Android inovatif dengan desain antarmuka intuitif dan performa tanpa kompromi.
                </p>
              </Card>
            </div>

            {/* Academic Services */}
            <div className="md:col-span-12">
              <Card hoverable className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 p-10 md:p-14 rounded-[2rem] border border-surface-variant/60 group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-woka-blue/5 rounded-full blur-[100px] group-hover:bg-woka-blue/15 transition-colors duration-700"></div>
                <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-surface-container-low flex items-center justify-center text-woka-blue border border-surface-variant/40 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  {/* Icon placeholder (local_library) */}
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="font-display text-3xl font-bold mb-4 text-on-surface tracking-tight">
                    Jasa Skripsi & Tugas Kuliah
                  </h3>
                  <p className="text-on-surface-variant text-lg max-w-3xl leading-relaxed">
                    Bantuan akademik eksklusif dan profesional. Kami menyediakan bimbingan penyusunan karya ilmiah yang terstruktur, orisinal, dan berkualitas tinggi untuk memastikan kelulusan tepat waktu Anda.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-inverse-surface text-inverse-on-surface pt-32 pb-10 relative overflow-hidden border-t border-outline/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-woka-orange/5 rounded-full mix-blend-screen blur-3xl -z-10 translate-x-1/3 -translate-y-1/2"></div>
        <div className="px-6 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <Image src="/logo.png" alt="WOKA Logo" width={100} height={40} className="mb-8 brightness-0 invert opacity-90 object-contain" />
              <p className="text-surface-variant/60 mb-8 leading-relaxed font-sans">
                Membangun Solusi Digital & Akademik dengan presisi, kreativitas, dan dedikasi tinggi.
              </p>
              <div className="space-y-3 text-surface-variant/80 font-sans">
                <p className="flex items-center gap-3 hover:text-white transition-colors">
                  hello@woka.id
                </p>
                <p className="flex items-center gap-3 hover:text-white transition-colors">
                  +62 812 3456 7890
                </p>
              </div>
            </div>
            <div className="pt-4">
              <ul className="flex flex-col md:flex-row gap-8 font-semibold text-sm tracking-wide font-sans">
                <li><a className="text-surface-variant/60 hover:text-white transition-colors duration-300" href="#">Kebijakan Privasi</a></li>
                <li><a className="text-surface-variant/60 hover:text-white transition-colors duration-300" href="#">Syarat & Ketentuan</a></li>
                <li><a className="text-surface-variant/60 hover:text-white transition-colors duration-300" href="#">Bantuan</a></li>
                <li><a className="text-surface-variant/60 hover:text-white transition-colors duration-300" href="#">Karir</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-surface-variant/10 flex flex-col md:flex-row justify-between items-center text-sm text-surface-variant/40">
            <p>© 2024 WOKA Digital Agency. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
