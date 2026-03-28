export default function Philosophy() {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative p-12 md:p-16 rounded-3xl bg-bg-card border border-border overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-secondary/5 rounded-full blur-[60px]" />

          <div className="relative z-10">
            <p className="text-sm font-mono text-accent mb-6 tracking-wider uppercase">
              Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Two multipliers
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">10x Engineering</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Deep, first-principles expertise in electro-mechanical and
                  high-current power systems. Not just understanding the theory —
                  having built, commissioned, and troubleshot these systems on
                  factory floors and in data centers. This technical depth is
                  rare and it compounds.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-secondary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">The Network Effect</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Relationships built on trust, competence, and genuine value
                  creation. The network effect is extremely powerful — every
                  strong relationship opens doors to ten more. I invest in people
                  first and the business follows. This is how you go from $5M to
                  $200M.
                </p>
              </div>
            </div>

            {/* Core Tenets */}
            <div className="pt-10 border-t border-border space-y-10">
              <p className="text-sm font-mono text-highlight tracking-wider uppercase">
                Core Tenets
              </p>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Income Follows the Work</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  If you work hard consistently, in the same or related industries,
                  with the same people — you will succeed if through nothing else
                  than iteration alone. Naval Ravikant says to play iterated games
                  with iterated people. It has been my experience that this is a
                  universal truth and the surest path to success. Every venture
                  I&apos;ve built proves it: the same relationships, the same
                  industries, the same commitment to excellence — compounding over
                  14+ years.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Relationships Matter</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  In today&apos;s workforce, we&apos;re heavily reliant on digital
                  communication. But a personal presence is so much more powerful.
                  Body language, camaraderie, the unspoken understanding that comes
                  from being in a room together — a high level of communication is
                  completely nonverbal. Fostering strong relationships with the
                  people you work with and depend on for success isn&apos;t optional.
                  It&apos;s a must. Every major deal, every partnership, every
                  breakthrough in my career came from a relationship built face to
                  face.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Honesty, Integrity, Morals</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Bulls make money, bears make money, pigs get slaughtered. Show
                  returns for your partners in advance — knowing you&apos;ve got
                  years to recoup — and then watch the returns flow in. Do the
                  right thing. It seems simple in practice, but when faced with
                  challenges at work or opportunities that might stress a
                  relationship, always take the high road. I&apos;m a student of
                  game theory and the prisoner&apos;s dilemma, and I integrate
                  this as a core part of my decision-making: cooperate first,
                  play fair, and optimize for the long game. The people who cut
                  corners win once. The people who play with integrity win
                  forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
