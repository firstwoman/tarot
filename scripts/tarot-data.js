const tarotData = [
  {name: 'The Fool',
  interpretation: 'Hey girl, The Fool is here to remind you that sometimes a fresh start is exactly what you need. I know it can be scary to leap into the unknown, but trust me, that’s where you’ll find your truth. Let curiosity be your guide. The world is waiting for you to make your mark.',
  keywords: 'New beginnings, spontaneity, adventure, innocence, potential, faith, fearlessness, a leap of faith, originality, freedom from constraints, purity of action, acting without malice, being in the present, acting without thinking, eccentricity, silliness, seeking freedom.',
  message: 'It’s time to fly!'},
  
  {name: 'The Magician',
  interpretation: 'The Magician is telling you that you’ve got some serious manifesting energy at your fingertips. Are you focusing that creative power of yours and conjuring up the life of your dreams? Whether you’re casting spells in the boardroom or the bedroom, stay centered in your purpose and power. The whole universe is conspiring to support you.',
  keywords: 'Creativity, action, power, manifestation, skill, communication – oral, written and electronic, technology, magic, work, self-employment, a smooth talker, having the gift of the gab, will-power, directing your will, creative visualization, manifesting your desires.',
  message: 'Visualize it, feel it, believe it. Now make it real.'},
  
  {name: 'The High Priestess',
  interpretation: 'Close your eyes and listen. The High Priestess is beckoning you to dive deep into your intuition. There’s a well of wisdom within you, just waiting to be tapped. Trust that inner voice, even if it’s a whisper right now. The answers you seek are already inside, waiting to be revealed.',
  keywords: 'Mystery, intuition, inner-knowing, self-trust, spiritual insight, emotional stability, divination, esoteric wisdom/knowledge, things yet to be revealed, your higher-self, spirit guides, discovering your own truth, a single woman, a chaste woman, morality, sanctity.',
  message: 'Tune in and trust.'},
  
  {name: 'The Empress',
  interpretation: 'Alright, it’s time to embrace your inner Empress! This card is all about harnessing your feminine power and getting your creative juices flowing. Are you working on a passion project, growing a tiny human, or reinventing yourself? Good! Surround yourself with things that light you up, spend time in nature, and prioritize that self-care. You can’t pour from an empty cup!',
  keywords: 'Nurturing, abundance, fertility, mothering, your mother, love, beauty, a businesswoman, mother earth, a multi-tasker, pregnancy, creativity, solving problems creatively, fulfilling your potential, a successful business or opportunity, social status.',
  message: 'Own your feminine magic.'},
  
  {name: 'The Emperor',
  interpretation: 'It’s time to own your power. The Emperor is marching in with a wake-up call. Step into your authority with confidence, create structures that support your goals and take responsibility for your domain. Look for aspects of your life where you could wear your crown with pride: your boss, your father, a promotion to a senior role, your ambition, taking a stand, rational thought, responsibility. Queen, your throne awaits!',
  keywords: 'Authority, order, structure, authority, your boss, leadership, your father, the establishment, promotion to a senior role, asserting yourself, ambition, law and order, taking a stand, firmness with others and yourself, rational thought, responsibility, stability, fairness.',
  message: 'Claim your space, own your grace.'},
  
  {name: 'The Hierophant',
  interpretation: 'Have you thought of working with a mentor, joining a religious community, or studying an ancient wisdom? Well, The Hierophant card is inviting you to connect with something bigger than yourself. Embrace the structure and guidance (but don’t forget to honor your own intuition, too.)',
  keywords: 'Group identity, large institutions, education, teaching, learning, tradition, orthodoxy, the status quo, religion, a guru or teacher, spiritual guidance, occult or mystical groups, divine laws, seeking counsel and advice, church, spiritual retreat, brotherhood.',
  message: 'Root yourself in wisdom, then spread your own wings.'},
  
  {name: 'The Lovers',
  interpretation: 'The Lovers card is all about choices and partnerships, in love and in life. You may find yourself at a crossroads, wondering which path to commit to. Here’s the deal: you’ve got to get crystal clear on what you want and what aligns with your values. Don’t let fear be the boss of you! Whether you’re called to unite with another or go solo, choose the path that feels authentic to who you are.',
  keywords: 'Love, choices, partnerships, affection, being at a crossroads, togetherness, going into business with another, being duty bound, a love affair, falling in love, commitment, an engagement, choosing between two lovers, harmony, trust, marriage, contracts, union.',
  message: 'Choose you, boo.'},
  
  {name: 'The Chariot',
  interpretation: 'Get ready to ride! The Chariot is urging you to take the reins and charge forward with confidence. You’ve got the willpower and determination to overcome any obstacle in your path. Trust your gut and let your emotions fuel your progress. Stay connected to your inner compass and keep your eyes on the prize.',
  keywords: 'Drive, will power, direction, ambition, confidence, victory, success, a journey, transportation, success with little or no support, overcoming obstacles, triumph in the face of adversity, coming to the aid of another, mastering a skill, driving force, impetus, energy.',
  message: 'Onwards and upwards!'},
  
  {name: 'Strength',
  interpretation: 'Strength is reminding you of the incredible power that lies within. You’ve got the courage and resilience to handle whatever comes your way. Remember, true strength isn’t about force or aggression–it’s about staying centered in your compassion and integrity. Tap into that inner reservoir of love and let it fuel your actions.',
  keywords: 'Inner strength, self-assurance, self-control, self-belief, patience, confidence, enjoying power, lust, sex, sexuality, eroticism, heroic acts, strength through personal power and not violence, vitality, virility, potency, confidence without arrogance, compassionate.',
  message: 'Gentle heart, fierce spirit.'},
  
  {name: 'The Hermit',
  interpretation: 'The Hermit is inviting you to embark on an inner journey. It’s time to step away from the noise and distractions of the outside world and get quiet with yourself. This is a beautiful opportunity to reconnect with your own wisdom and truth. Embrace the solitude and let it guide you to a deeper understanding of who you are and what you want.',
  keywords: 'Introspection, contemplation, wanting or finding solitude, private self-reflection, seeking enlightenment and spiritual experiences, meditation, being discreet, privacy, home study, withdrawing from society, patience, self-exploration, therapy/counseling, self-help.',
  message: 'Tune out the world and tune in to you.'},
  
  {name: 'Wheel of Fortune',
  interpretation: 'The Wheel of Fortune is spinning in your favor! Get ready for some exciting changes and opportunities coming your way. But here’s the thing: it’s up to you to seize them. Trust your instincts and take inspired action. The universe is conspiring to support your success and happiness. Stay open, stay positive, and let your passions guide the way.',
  keywords: 'Luck, chance, opportunity, changes, a turning point, movement, winning, the cycle of life, ups and downs, fate, destiny, a chance meeting that can change your life, what goes around comes around, winning at a game of chance, a definite yes, good times, success.',
  message: 'Get ready to ride the wave!'},
  
  {name: 'Justice',
  interpretation: 'Justice is here to remind you that every action has a reaction. Take a good, honest look at how your choices and behaviors are impacting your life and the lives of those around you. This is a time to get really clear on your values and make sure you’re living in alignment. Remember, you reap what you sow–so choose thoughts and actions that serve your highest good.',
  keywords: 'Justice, karma, balance and equilibrium, truth, fairness, responsibility, accountability, integrity, dignity, agreements, legal affairs, a court case or tribunal, consulting a lawyer, checking legal documents, seeking fairness through clarity, trial outcomes, justice system.',
  message: 'Live your truth.'},
  
  {name: 'The Hanged Man',
  interpretation: 'Hey wise one, The Hanged Man is inviting you to pause, surrender, and shift your perspective. This is a time to let go of your usual way of thinking and open up to new insights and wisdom. Sometimes we need to release control in order to receive the guidance we seek.',
  keywords: 'Letting go, sacrifice for gain, surrender, breaking patterns, a crisis, delays, seeing from another direction, a fresh perspective, suspension of activity, giving something up, experiencing a metamorphosis, spiritual advancement, a detachment from the material.',
  message: 'Allow yourself to just be.'},
  
  {name: 'Death',
  interpretation: 'Don’t be afraid, darling. Death is ushering you through a profound transformation. This is a time of letting go, shedding old skin, and making space for the new. Trust that this ending is necessary for your growth and evolution. Grieve what you need to, honor the past, but don’t cling to what’s dying. This is a portal to a new beginning.',
  keywords: 'Endings, mortality, profound change, letting go of emotional attachments, severing ties, it’s over, the end of an era or cycle, failure, loss, transformation, renewal, rebirth, the breaking of old habits.',
  message: 'You are being reborn.'},
  
  {name: 'Temperance',
  interpretation: 'Temperance is your invitation to find your flow and create harmony in your life. Seek balance, practice patience, and embrace moderation. Let go of extremes and find the middle path. Blend your unique ingredients – your talents, experiences, and wisdom–into a beautiful masterpiece. Your steady, guided approach is leading you to a profound transformation.',
  keywords: 'Harmony, balance, synthesis, moderation, blending, synergy, alchemy, being temperate, blending opposites, angel communication, connecting with your guides, merging, looking for divine intervention, beginning self-help/therapy, self-acceptance.',
  message: 'Be the calm in the center of the storm'},
  
  {name: 'The Devil',
  interpretation: 'It’s time to get real about what’s keeping you stuck. The Devil is here to pull back the curtain on any limiting beliefs or patterns that are holding you back. Whether it’s a toxic relationship, a dead-end job, or a self-sabotaging habit, this card is a wake-up call to break free. Remember, you have the power to choose a different path.',
  keywords: 'Bondage, temptation, enslavement, addictions to sex/drugs/drink/money, fear and doubt, materialism, lies, violence, unhealthy relationships, sexual deviancy/gratification, obsessions, hard work/over worked, tied to the job, feeling trapped and without options.',
  message: 'Confront your demons, reclaim your power.'},
  
  {name: 'The Tower',
  interpretation: 'Brace yourself, change is coming! The Tower is shaking things up and clearing the way for a new beginning. I know sudden upheaval can be scary, but trust that this is happening for your highest good. Let go of what’s no longer serving you and build something better. You are resilient, you will rise from the rubble stronger than ever.',
  keywords: 'Sudden and unexpected change, upheaval, destruction, ruin, catastrophe, release, revelation, breaking down of old forms, renovation, an accident or damage to the home, bankruptcy, redundancy or loss of work, being overthrown or ousted, house repossession.',
  message: 'Rise up!'},
  
  {name: 'The Star',
  interpretation: 'The Star is shining a light of hope and renewal your way. You’ve been through some tough times, but healing is here. Reconnect with your inner light and trust in the universe’s plan for you. Open your heart to new possibilities, nurture your dreams, and let your soul shine. Brighter days are ahead, keep the faith.',
  keywords: 'Hope, happiness, opportunities, optimism, renewal, spirituality, cosmic blessings, help in all forms, beauty and aesthetics, astrology, astronomy, the heavens, wishing on a star, good health and healing, an inspirational person, a period of tranquility, alternative therapies.',
  message: 'Let your light lead the way.'},
  
  {name: 'The Moon',
  interpretation: 'The Moon is illuminating the shadows and inviting you to dive deep into your intuition. There may be hidden fears or illusions clouding your path, but don’t let them scare you off course. Trust your gut, even if the way forward isn’t clear. Embrace the mystery and let your dreams and intuition guide you. The truth will be revealed in divine timing.',
  keywords: 'Dreams but also nightmares, illusion, hidden things–particularly enemies, insecurity, mystery, falsehoods, visions, mental confusion, a dark night of the soul, a difficult period, lacking clarity, deception, secrets, increased psychic ability and experiences.',
  message: 'Listen to the whispers within.'},
  
  {name: 'The Sun',
  interpretation: 'Hey rockstar! The Sun is shining down on you, illuminating all the incredible possibilities in your life. This is a time of vitality, success, and radiant self-expression. You’ve put in the work, now it’s time to bask in the glow of your achievements. Celebrate your growth, share your gifts, and let your light inspire others.',
  keywords: 'Life, energy, vitality, joy, enlightenment, warmth, manifestation, happiness, YES! riches, marriage, good times, success, clear thinking, optimism, blessings, good fortune, a good holiday, nice weather, male archetype/masculinity, the conscious mind.',
  message: 'Shine on!'},
  
  {name: 'Judgement',
  interpretation: 'Get ready for a major wake-up call! Judgment is sounding the alarm, urging you to rise up and answer the call of your higher purpose. This is a time of profound transformation and rebirth. Let go of the past and embrace a new chapter. You are being called to something greater, don’t hit snooze on your destiny!',
  keywords: 'Redemption, rebirth, an awakening, renewal, a call to action, spiritual or religious calling, reincarnation, a realization, a change that has already occurred, end of an era, a rite of passage, a period of transition, decision making, the final outcome, a judgement, moving on.',
  message: 'Your new life awaits.'},
  
  {name: 'The World',
  interpretation: 'You did it, you’ve arrived! The World is celebrating your journey and all the incredible growth and accomplishments along the way. This is about completion, wholeness, and alignment. Savor this moment of fulfillment and integration. The entire universe is cheering you on. Get ready to embark on a whole new adventure!',
  keywords: 'Completion, fulfillment, possibilities, outcomes, realisations, wholeness, success, totality, moving–particularly abroad, success and successful conclusions, the journey’s end, goal achievement, world travel, exploration, anthropology, socializing, studying cultures.',
  message: 'You are exactly where you’re meant to be.'},
  
  {name: 'Ace of Cups',
  interpretation: 'The Ace of Cups creates something new in its purest sense–love, life and a connection to the divine in the form of a spiritual practice or communication with angels. You see increased intuition and abundance coupled with joy',
  keywords: 'Love in its purest sense, its connection to the divine source, increased psychism and intuition, mind, body and spirit in union, abundance, a new relationship, birth or pregnancy, sensual passion, inspired creativity.',
  message: 'Open your heart and be receptive to the beauty all around you.'},
  
  {name: 'Two of Cups',
  interpretation: 'The Two of Cups signifies a romantic relationship, a joining of two people in harmony, mostly. It can also describe platonic and business relationships that have a close bond–the essential ingredient here.',
  keywords: 'Love, harmony, emotional balance, love flowing freely, a repaired relationship, togetherness, close bonds and friendships, a relationship that is strengthening, mutual love and respect; business partnerships, mergers, joining forces with another.',
  message: 'Open your heart and receive the love that is flowing toward you.'},
  
  {name: 'Three of Cups',
  interpretation: 'The Three of Cups sees all manner of partying, joining together in groups for fun, joy and everyone’s highest good. With or without wine, it’s time experience the connection of togetherness.',
  keywords: 'Joy; abundance in love; being in love; giving love freely; feeling love from others; gatherings and celebrations; success with great satisfaction; feeling good; celebrations and family gatherings; women’s groups; participating in group events; a harem.',
  message: 'Feel the love today, it’s flowing from everywhere.'},
  
  {name: 'Four of Cups',
  interpretation: 'Can you have too much of a good thing? The Four of Cups says yes, you can. You know the feeling, nothing excites you and everything feels meh. Boredom and nonchalance fill your day.',
  keywords: 'Ennui; inertia; settling for what you have; missing opportunities; apathy; melancholy; indifference; accepting what you have without seeking growth or progression; discontent; not appreciating what you have already; wanting what you can’t have.',
  message: 'Dot the is and cross the ts. Go on, do it, do it now..'},
  
  {name: 'Five of Cups',
  interpretation: 'When all seems lost, and you feel bereft, know that two cups are still standing. The Five of Cups shows loss and emotional pain, but it also reminds us that all is not lost and that we can recover. Have hope.',
  keywords: 'Sadness; feeling disappointed; feeling let down or betrayed; the doldrums; acceptance of misfortune; malaise; despondency; discontent; some losses; not appreciating all you have; negative thinking; depression; pessimism; mourning.',
  message: 'It’s a moody day and you may lose out but you should never give up hope.'},
  
  {name: 'Six of Cups',
  interpretation: 'In one tradition, the Six of Cups is clearly sexual, in another it is nostalgic. It may represent your family, connections and ancestry. It may also represent the core of you, who you are, underneath the surface..',
  keywords: 'Pleasure; sentimentality; nostalgia; happy memories; indulgence; sexual pleasures; enjoyment; gratification; excitement; ecstasy; communication with ancestors; family karma; family support; reminiscing; dealing with the extended family; family spirits/ghosts.',
  message: 'It takes two to resolve a dispute but it takes just one to make the first move. Pick up the phone and bring an end to the emotional desert.'},
  
  {name: 'Seven of Cups',
  interpretation: 'Choosing choices, or be paralysed by choice. There is a paradox to the Seven of Cups. When all is on offer, how do you choose? What do you choose? Will you choose, or will you walk away empty handed? Only you can decide.',
  keywords: 'Excesses; over-indulgence; gluttony; lack of morality; alcoholism; drug use or addiction; debauchery; making ill-informed choices; corruption; daydreaming; wishful thinking; delusion; confusion; facing a difficult choice; indecision.',
  message: ' Step back from everything today and see with your eyes.'},
  
  {name: 'Eight of Cups',
  interpretation: 'On the surface, everything looks fine. No-one knows how you feel inside. The Eight of Cups mirrors back to you your need to up and walk away. Just like that. And no-one will see it coming. Only you.',
  keywords: 'Lethargy; indifference; melancholy; despondency; feeling dejected; turning away from your aim, giving up; choosing to leave; leaving covertly; a surprise departure; leaving the past behind; abandonment; embarking on an emotional quest.',
  message: 'When you make your big decision today, make it with certainty and make it in the Light.'},
  
  {name: 'Nine of Cups',
  interpretation: 'The original YES card! The Nine of Cups is wishes being granted and dreams coming true. If it’s what you really wanted, you will feel joy in heart and a skip in your step. Now you can breathe and enjoy your success.',
  keywords: 'Contentment; satisfaction; universal joy; success; a bright future; brimming with joy; blessings; feeling good about everything; bliss; wishes granted; good times; abundance; rewards for your efforts; physical pleasures; luxurious living.',
  message: 'Today is all about getting what you wish for – wish well.'},
  
  {name: 'Ten of Cups',
  interpretation: 'The Ten of Cups brings emotional fulfilment from being satisfied with your love, your life and your spiritual pursuits. There is contentment and sharing the love when your cup runneth over and you have ample to spare.',
  keywords: 'Fulfillment; perfect harmony; emotional stability; satisfaction; a happy family unit; your dream becoming reality; security; your dream home; stability in your personal relationships; contentment; a growing family; happy communal living; a move to the country.',
  message: 'Love is all around and it shows.'},
  
  {name: 'Page of Cups',
  interpretation: 'You find yourself at the beginning of a new spiritual or emotional phase of life. You feel a strong sense of connection to others and a growing empathy for all sentient life. Creativity abounds and seeking for pleasure’s sake drives and inspires you.',
  keywords: 'Love letters; poetry; hand written communication; new romance; love forming gently; an art student; younger sibling; school/college friend; youngster/child.',
  message: 'Don’t put off what you can begin today.'},
  
  {name: 'Knight of Cups',
  interpretation: 'The Knight of Cups drives forward with plans for love, art and spirituality. Also called a Soldier of Love, he is a romantic man, a love interest and also yourself in the throes of full on love.',
  keywords: 'Romance, relationships, proposals; dreamy, charming, romantic; being focused on love; being courageous in love; feeling inspired; being guided by your emotions.',
  message: 'Act with love, express yourself, be creative.'},
  
  {name: 'Queen of Cups',
  interpretation: 'The Queen of Cups is the full expression of emotional maturity. She loves, she creates, she cries and she shows herself. She is her hormones. She is maternal and nurturing, psychic and intuitive, sensual and alluring.',
  keywords: 'Mother; clairvoyant and psychic; a caring and nurturing woman; empathic and sensitive; often emotional; artistic and creative; a good listener.',
  message: 'Be open to receive love, healing and nurturing.'},
  
  {name: 'King of Cups',
  interpretation: 'The King of Cups represents the epitome of success through trusting the self. Highly realized by gut intuition, you cannot lie to this individual and get away with it. He is charming, confident but comfortable to be around.',
  keywords: 'Compassionate and caring; warm and generous; wise and thoughtful; his strength lies in his serenity; a protector and benefactor; calm; solid; altruistic.',
  message: 'Support others by supporting yourself first.'},
  
  {name: 'Ace of Swords',
  interpretation: 'Embrace a new way of thinking, a new way of seeing and describing the world, and your place in it. The Ace of Swords represents a time when emotional intelligence is at its height. Use it wisely.',
  keywords: 'Represents the creative idea; the sword of truth; gaining clarity; a brilliant idea; justice; mental strength; divine inspiration; quick-fire thoughts and ideas; a period of clarity; the spoken and written word.',
  message: 'Thoughts flow and problems are solved.'},
  
  {name: 'Two of Swords',
  interpretation: 'Peace restored indicates a period of calm but suggests all was not well. Use this time to create balance and weigh things up carefully. Don’t spread yourself too thinly. Peace may be restored, but it can easily be lost again.',
  keywords: 'Balance and harmony; inner peace; calmness; agreement; compromise; meditation; consciousness; right thinking; deciding on a choice; applying logic; calm amid instability; mental stability; serenity; peace.',
  message: 'Take some time out today to bring your core back to center so you may experience the fullness of the day.'},
  
  {name: 'Three of Swords',
  interpretation: 'When you are so broken-hearted, you lose sight of reality. You lose the ability to think clearly and to see the next correct move. You cannot avoid this painful phase, but you can recognise it, and you certainly don’t need to stay here.',
  keywords: 'Grief; heartbreak; emotional pain; a parting or ending of a relationship; troubles ahead; emotional disturbance; mental anguish.',
  message: 'Take a deep breath and brace yourself. The news isn’t good but it will get better.'},
  
  {name: 'Four of Swords',
  interpretation: 'Take a timeout to relax, regroup and refocus. Relax first though and reconnect with yourself. Life can take us over, our committments often rule. Time for a switch up, and when you’re ready, re-begin anew.',
  keywords: 'Calling a truce; rest; concord; a pact; agreement; synchronicity; order; taking a break; reconsidering your position; recuperating; quiet consideration; attending a retreat or respite care; going into rehab; taking time out; convalescing.',
  message: 'Take time out for self-care and mind-body balance.'},
  
  {name: 'Five of Swords',
  interpretation: 'Defeat can be real and perceived. What may not be the end can feel like it when efforts have been large. Feeling defeated can ruin future plans in a devastating way and it is easy to fall into depression when things don’t go well.',
  keywords: 'Defeatism; arguments; negativity; dissension; discord; troubles, disturbances; feeling defeated; feeling broken; scoring points; a smear campaign; spite and malice; not standing up for yourself; being heavy handed; a coupe; selfishness; revenge.',
  message: 'Words hurt. Mind yours, deflect others.'},
  
  {name: 'Six of Swords',
  interpretation: 'You are about to embark on a journey – from an unsafe place, an unfulfilling job or an unsatisfactory relationship. This is not an emotional reaction but a well thought out and logical response to a situation you can no longer ignore.',
  keywords: 'Mental clarity; ideas coming together; using logic to find the solution; using your intellect; an inner journey of discovery; an actual journey; relocation; a period of calmness ahead; living through difficult times; successfully navigating a difficult period; a cruise.',
  message: 'Be prepared to make a move.'},
  
  {name: 'Seven of Swords',
  interpretation: 'Futility or theft? Or both? The Seven of Swords tells of a poor effort, which leaves us vulnerable to being taken advantage of. You give up too soon and lose out, while someone swoops in, cleans up and gains.',
  keywords: 'Feeling ineffectual; delusion; feeling inept; pessimism; subterfuge; theft ; theft of ideas; mental procrastination; just doing enough; falling short of the mark; working beneath your own standards; being underhanded; spying; a fact finding mission.',
  message: 'Guard your stuff and your ideas. Give your best effort.'},
  
  {name: 'Eight of Swords',
  interpretation: 'There is an odd dichotomy with the Eight of Swords – you want to break free, and you can, but don’t. These bonds aren’t emotional but dutiful. You are holding yourself here though, through choice, duty bound.',
  keywords: 'Interference; sheer bad luck; being held back; mental blockages; unforeseen obstructions; fulfilling obligations; self-sabotage; fear of failure; holding yourself back; quitting before you fail; being immobilized; being outmaneuvered; being outplayed.',
  message: 'Thinking you can’t imprisons you. Believing you can sets you free.'},
  
  {name: 'Nine of Swords',
  interpretation: 'You simply cannot let go of negative thoughts, past trauma and bad behaviour. Nightmares and insomnia become familiar and drain you further. The Nine of Swords advises you regain perspective so you recover your position.',
  keywords: 'Mental cruelty; verbal assault; worry; sleepless nights; self-harm; betrayal; mental anguish and suffering; despondency; a turn for the worse; anxiety; psychosomatic illness; despair; feeling hopeless and helpless; nightmares; insomnia.',
  message: ' Overcome your fears and face the day.'},
  
  {name: 'Ten of Swords',
  interpretation: 'Defeat has come, ruin is here and all is bleak. This is perhaps the worst card in the deck. All is lost and there is no hope. The sun sets. But, the sun also rises and tomorrow is a new day. Lay still for a moment, before you rise again.',
  keywords: 'Ruin; a sudden ending; feeling totally broken; grief; a negative outcome; depression; feeling crushed; the result of wrong choices; surgery; falling just before the finishing line; hardship; a bad omen; projects failing; being stabbed in the back.',
  message: 'Something is amiss so prepare yourself.'},
  
  {name: 'Page of Swords',
  interpretation: 'When you let go of preconceived ideas, you open your mind to new possibilities. The Page of Swords signifies this opening of your mind. New ideas and thoughts abound and you are excited by your new found curiosity to what you previously saw as mundane.',
  keywords: 'Messages, electronic communication; new projects; renewed vigour; new learner; a sibling; school/college friend; youngster/child.',
  message: 'Aim higher.'},
  
  {name: 'Knight of Swords',
  interpretation: 'When you feel inspired and energized, you put your plans into action. The Knight of Swords signifies a time when you think you can do anything. And you can. Bring your ideas into being, the time is now.',
  keywords: 'Active; energetic; exacting; swiftness; sudden changes; assertive; mental agility; problem solving; being able to think on your feet; resolution; courageous; travel.',
  message: 'With the bit between your teeth, you are on top of every game today. '},
  
  {name: 'Queen of Swords',
  interpretation: 'The Queen of Swords has the reputation of being the Ice Queen. She can appear to be cold as ice, to some. She just thinks with her head, not her heart. Every decision is made in logic and fact. She gets things done with precision and aplomb. Cold? Maybe. Effective? Definitely. Be the Ice Queen.',
  keywords: 'Aloofness; intellectual; factual; solemn; a great thinker; critical and precise; observant; a widow; rationality; independent; witty.',
  message: 'Rise above low-level action.'},
  
  {name: 'King of Swords',
  interpretation: 'The intellectual in the room, the King of Swords is the man with all the answers and a man of great conversation. In your life, it signifies a time to make balanced judgements. This decision is especially important and needs all of your mental faculties to make it.',
  keywords: 'Just and fair; intellectual but enigmatic; a great thinker or philosopher; authoritative; commanding; logical; moral and ethical; trustworthy and reliable.',
  message: 'Think things through, from every perspective.'},
  
  {name: 'Ace of Wands',
  interpretation: 'Always a new beginning of some kind, the Ace of Wands brings energy, impetus and a renewed sense of being. If you’re starting something new, consider it blessed.',
  keywords: 'The creative spark; a new project or creative endeavour; a passionate union; a new start; willpower; implementing your will; inspiration; illumination; virility; spiritual insights; the vital life force; impetus.',
  message: 'Act on your ideas.'},
  
  {name: 'Two of Wands',
  interpretation: 'The Two of Wands shows you taking control of your situation, balancing the energy enough to prepare for expansion. Only when we are centered can we progress postively.',
  keywords: 'Being in control; dynamism; centeredness; gaining control; dominating another or a situation; courage of your conviction; seeing the big picture; having great vision; wanting more; not being satisfied with your lot; focusing your intent.',
  message: 'Tap into your personal power.'},
  
  {name: 'Three of Wands',
  interpretation: 'Expansion and virtue feature with the Three of Wands, so: working the right way, moving forward with plans that are good for all concerned. Doing the right thing in the right way.',
  keywords: 'Ideas crystallizing; integrity; confidence; a hobby becoming a business; confirmation you’re on the right path; control with harmony; business expansion; making long term plans; investing in your future.',
  message: 'Dig deep, push forward.'},
  
  {name: 'Four of Wands',
  interpretation: 'The Four of Wands shows the completion of the first stage of your project. All is well and we have made a success of our work and lives, so far. Get ready for the next stage.',
  keywords: 'Initial success; first stage of completion; continuation of the project; wholeness; progression; equilibrium; balanced harmony; green light to continue; moving house; setting up a new home; large celebrations; a welcome home party.',
  message: 'Life is moving in the right direction, make sure you’re ready.'},
  
  {name: 'Five of Wands',
  interpretation: 'We see strife, arguments and sometimes physical combat with the Five of Wands. People are passionately disagreeing and things may get out of hand without a mediator or referee',
  keywords: 'Unrest; unease; disagreements; an internal battle; disruption; defending yourself or others; competition; being challenged; challenges; competitive sports; brainstorming and group discussions; problem solving; friskiness, sexual arousal; guys hanging out together.',
  message: 'Be smart and roll with the punches'},
  
  {name: 'Six of Wands',
  interpretation: 'Victory after a challenge – the Six of Wands shows us we have to earn this success and it may be short lived but for now, you have won and you can feel good about that.',
  keywords: 'Victory; your goal reached; a breakthrough; feeling the adrenaline of winning; feeling exalted; culmination of your effort; feeling inspired to continue; recognition; loving the limelight; success after strife; difficulties overcome.',
  message: 'Enjoy the feeling of success today. You earned it.'},
  
  {name: 'Seven of Wands',
  interpretation: 'This is a warning of obstacles and difficulties ahead. The Seven of Wands encourages you to be brave and creative in your solutions. Use your intelligence, be wily',
  keywords: 'Courage; standing up for yourself; fighting an unknown adversary; obstacles that must be overcome; a calculated risk; daring; standing your ground; pushing through obstacles; challenges from many sources; attempted coup; not an easy task.',
  message: 'There may be troubles ahead… but you got this.'},
  
  {name: 'Eight of Wands',
  interpretation: 'Where focus goes, energy flows – the Law of Attraction in Action. Something is coming and it’s coming quickly. Are you ready for what the Eight of Wands brings?',
  keywords: 'Acting quickly; overcoming obstacles, directness; communications; events moving swiftly; blockages removed; opportunities arrive quickly; manifestation imminent; law of attraction in action; working quickly and efficiently; apparent synchronicity.',
  message: 'Thoughts create things. Think happy thoughts.'},
  
  {name: 'Nine of Wands',
  interpretation: 'Just when you thought you had nothing left to give, the Nine of Wands tells you to be strong and prepared. Defence, in order to be effective, must be mobile.',
  keywords: 'Determination; strength of character; digging deep; belief in your personal power; courage under fire; a test of personal power or strength; being able to push through; protecting what you have worked for; defending your rights; protecting your reputation.',
  message: 'Success is not final, failure is not fatal: it’s the courage to continue that counts.'},
  
  {name: 'Ten of Wands',
  interpretation: 'Life can be difficult and unfair in the load we have to carry. It may not be your fault, but the responsibility fell to you anyway. The Ten of Wands shows you coping though, through it all',
  keywords: 'Being overburdened; repression; unreasonable obligations; taking on too much; feeling the pressure; feeling trapped; no control over circumstances; oppression; being a victim of your own success; having too many irons in the fire; laying your burdens down.',
  message: 'Get your multitasking hat on, today will be quite a ride.'},
  
  {name: 'Page of Wands',
  interpretation: 'You are beginning to realize or remember your own power. There is an upsurge in energy and a renewed sense of self. You may want to explore new things or those long forgotten.',
  keywords: 'Messages, electronic communication; new projects; renewed vigour; new learner; a sibling; school/college friend; youngster/child.',
  message: 'Don’t stop me now, I’m having such a good time.'},
  
  {name: 'Knight of Wands',
  interpretation: 'Determination and directing your will all describe the Knight of Wands. Whatever you are planning, this card says you have the energy, tenacity and desire to succeed. Go for it!',
  keywords: 'Travel; movement; migration; change of residence; courage, taking action; clever; witty; charming; energetic; focused; spontaneous.',
  message: 'Whatever you want to do today, do it. Right now.'},
  
  {name: 'Queen of Wands',
  interpretation: 'The Queen of Wands indicates a transformation, a stepping into your power and becoming yourself. Passion, belief and sensuality all inform this dynamic and charismatic woman.',
  keywords: 'Mother; sexual; flirty; social; dynamic; expressive; creatrix; open-minded; clairvoyant; telepathic; femme fatale; dominatrix.',
  message: 'When you experience your natural confidence today, remember it so you can use it again, and again, and again...'},
  
  {name: 'King of Wands',
  interpretation: 'Success comes through commitment, expression of the will and the fully realised self. The King of Wands represents the epitome of improvement of self and its effect on others. Strength and fairness prevail.',
  keywords: 'Motivational, noble, charismatic; generous; virile; horny; agile; hero; leader; a visionary; strong; capable; bold; daring.',
  message: 'You have dynamic energy today, you fire people up and get things done.'},
  
  {name: 'Ace of Pentacles',
  interpretation: 'Not just a green light to go, but help in getting started on your project. The Ace of Pentacles signifies that the time is right and if you go for it now, you will succeed. Gifts from nowhere appear everywhere.',
  keywords: 'Represents the beginning stages of something tangible; prosperity; growth; material abundance; new enterprise; improving finances or wealth; a solid fruitful foundation; a promotion; a pay rise; good luck; unexpected money.',
  message: 'Take whatever opportunities come your way today.'},
  
  {name: 'Two of Pentacles',
  interpretation: 'Change is constant and nothing is more certain. The Two of Pentacles suggests you seek harmony during a time of change. Chaos need not ensue. Fluidity through planning is advised.',
  keywords: 'Movement; flux; maintaining balance; yin and yang; having ups and downs; a juggling act; growth through change; multi-tasking; a heavy workload; enjoying your work; welcome change; a move into a better phase.',
  message: 'In a demanding world, the key to success is balance.'},
  
  {name: 'Three of Pentacles',
  interpretation: 'Working with others, or working with multiple systems and ideas reign with the Three of Pentacles. There is an excellence that persists with this card also. Creating with your hands, forming and forging are also favoured.',
  keywords: 'Work; a new job or career; career satisfaction; doing a good job; effort; excellence; continued progression; being industrious; productivity; team work; consulting with others; getting outside help in; getting outside; co-operation; creating a masterpiece.',
  message: 'Success requires that you take action.'},
  
  {name: 'Four of Pentacles',
  interpretation: 'Building a solid foundation or being miserly? Both can trap you within their walls of restriction if you allow them to. Safety can bring a prison. Hoarding money can bring isolation. Four is a number of balance, it must be achieved.',
  keywords: 'Stability; strong foundations; manifestation; protecting your lot; elemental balance; structure; buildings; being materialistic; being frugal with resources; a tight rein on the budget; financially cautious; saving for the future; protecting yourself.',
  message: 'To experience continued growth, you have to create room. Whatever you’re holding onto, let it go. Expansion is waiting.'},
  
  {name: 'Five of Pentacles',
  interpretation: 'A difficult time ensues. Work is lost, money dries up, family and friends either turn their backs or cannot help. You are alone and you feel it – but this too shall pass. Some plants flower in winter, your time will come.',
  keywords: 'Material loss; worries; setbacks; stagnation; tension building; lack of belief; desolation; feeling isolated; being down on your luck; unemployment; losing your faith; losing your home; falling ill; financial hardship through illness; being excommunicated from your religion or faith.',
  message: 'Difficulties abound, but know this too, shall pass.'},
  
  {name: 'Six of Pentacles',
  interpretation: 'Money flows and success abounds. The Six of Pentacles shows give and take, commerce and trade and exchanges of all kinds. There is a hint of remembering those who have less than you. When the sun shines, share some love with others. ',
  keywords: 'Success; generosity; giving and receiving; reciprocity; financially helping others; paying it forward; charity; benevolence; an exchange; receiving a financial boost; a grant or bursary; the welfare system; balancing the books; paychecks; royalties; donations.',
  message: 'To give makes you joyous, to receive makes you thankful.'},
  
  {name: 'Seven of Pentacles',
  interpretation: 'How long do you wait for your work to produce fruit? When do you wait? And when do you call time? You can wait too long or you can give up too soon. Either way, everything associated with the Seven of Pentacles takes time, a long time. Question is, how much time do you have?',
  keywords: 'Delays in payouts; long term returns; slow but steady growth; having to wait for reward or renumeration; not working as hard as you could; working through a dry spell; working for nothing; little reward for a lot of effort; persistence; belief in a project.',
  message: 'Open-eyed honesty is your key to deciding your next steps.'},
  
  {name: 'Eight of Pentacles',
  interpretation: 'The card of the apprentice, the Eight of Pentacles is not just about learning a subject, but a skill, and one that involves the hands – creating, moulding and fixing. It signifies taking the time to learn and learn well. Learn, create, repeat.',
  keywords: 'Being cautious; foresight; discretion; taking calculated risks; careful with money; learning; education; taking a balanced approach; improving your skills; studiousness; a period of study; working hard; productivity; attention to detail; working to deadlines.',
  message: 'Variety is the spice of life and the key to a happy work day.'},
  
  {name: 'Nine of Pentacles',
  interpretation: 'The Nine of Pentacles says this is a time in your life to enjoy the fruits of your labor, the flowers in your garden and the things you have accumulated. This is not trivial, nor easy come easy go, you worked hard for the things you treasure, so enjoy them – and your time off.',
  keywords: 'Gain; rewards for your efforts; success in projects and business deals; realizing your goals; financial and personal independence; material security; self-sufficiency; leisure time; a kept woman (or man).',
  message: 'Your efforts are rewarded as the fruits of your labour blossom'},
  
  {name: 'Ten of Pentacles',
  interpretation: 'Let the good times roll! Business is great, families are together – everyone is sharing the spoils. The ten of Pentacles suggests that now is a great time to expand business, organise family gatherings and feel good about the future – you can ride any storm with money in the bank and a support network behind you.',
  keywords: 'Richness; abundance; wealth; family stability; prosperity; satisfaction; treasures found; an inheritance; a lottery win; a supportive and tight-knit family; a family business; traditions; ancestry and genealogy; family loyalty; care homes; caring for the elderly.',
  message: 'Accomplishment and abundance go hand in hand today.'},
  
  {name: 'Page of Pentacles',
  interpretation: 'A studious youth or the beginnings of new study and learning. Or both. The Page of Pentacles contains within it potential and an eagerness to become more. This is done through doing, action is begun, the new is born.',
  keywords: 'Students; apprentices; scholarships; physical communication; new projects involving research/study; school/college friend; youngster/child.',
  message: 'Success comes to those who work for it.'},
  
  {name: 'Knight of Pentacles',
  interpretation: 'There are times in life when nothing less than repetivite and mundane effort will do. The Knight of Pentacles tells us that when the work needs doing, we just have to get on with it. Sometimes life is dull, but little by little, the results pile up and we know success.',
  keywords: 'Business travel; employment opportunities; practicality; dependability; stoicism; persistence; trustworthiness; slow but steady progress; physical strength; physical pleasures.',
  message: 'It’s a day of work and fulfilling responsibilities.'},
  
  {name: 'Queen of Pentacles',
  interpretation: 'It is time to engage a new phase of life. Embark on a creative project, hobby or business. Move into your own home. Begin a legacy. The key is creation, making something you can show to others but enjoy just for yourself. Satisfaction rules here.',
  keywords: 'Motherly; caring; hospitable; comforting; safety and security; warmth; prosperity; success in business; loves luxury; veritable feasts; organised; creative; talented.',
  message: 'Abundance is rife today. How will you enjoy yours?'},
  
  {name: 'King of Pentacles',
  interpretation: 'Stable, sensual and well off, the King of Pentacles is the one constant in your life that you can rely on. He is thoughtful and wise, not rushing decisions nor being swayed to conform to modernity. He may not be exciting, but you an rely on this man and those like him.',
  keywords: 'Master builder; prosperity; has the golden touch; ambitious; safe; kindness; patriarchal; father figure; protector; financial security; successful businessman.',
  message: 'This is a day for holding court and solving issues.'}];
