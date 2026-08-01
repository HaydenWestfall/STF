import { Coverage } from '../models/Coverage';

const img = 'assets/img/coverages/';
const icon = 'assets/img/icons/';

/**
 * Long-form content for every coverage page. Descriptions are general
 * summaries of how these policies usually work — the page renders a
 * disclaimer reminding readers that the issued policy controls.
 */
export const COVERAGES: Coverage[] = [
  /* ------------------------------------------------------------------ AUTO */
  {
    id: 'auto',
    policyLabel: 'an auto policy',
    name: 'Auto Insurance',
    category: 'Personal Insurance',
    icon: icon + 'auto.png',
    heroImage: img + 'auto/card1.webp',
    supportingImages: [img + 'auto/card2.webp', img + 'auto/card3.webp'],
    tagline:
      'Coverage for the cars, trucks and drivers in your household — from the state minimum to the protection we would put on our own vehicles.',
    intro: [
      'Ohio requires every driver to carry liability insurance, but the state minimum is only a starting point. One serious at-fault accident can run well past those limits, and everything above them comes out of your own pocket. A policy built by an agent looks at what you drive, who drives it, how far, and what you have to protect if a claim goes badly.',
      'Because we are independent, we can rate your household with more than 20 carriers at once. That matters most when there is a young driver on the policy, a mix of personal and work use, an older vehicle you are deciding whether to keep full coverage on, or a ticket or accident in the last few years — situations where prices swing widely from company to company.',
      'We also make the boring parts easy: adding a vehicle the day you buy it, sending proof of insurance to a lender, swapping a driver on and off the policy when a student leaves for school, and walking you through a claim when something actually happens.',
    ],
    quickFacts: [
      { label: 'Ohio minimum liability', value: '$25k / $50k / $25k' },
      { label: 'Typical policy term', value: '6 or 12 months' },
      { label: 'Gap we find most often', value: 'Low uninsured motorist limits' },
    ],
    coreCoverages: [
      {
        title: 'Bodily Injury Liability',
        description:
          "Pays for other people's injuries when you are at fault — their medical bills, lost wages and your legal defense — up to the limit you choose. This is the coverage that stands between an accident and your savings.",
      },
      {
        title: 'Property Damage Liability',
        description:
          "Pays to repair or replace what you damage in an at-fault accident: another vehicle, a fence, a mailbox, a garage door or a storefront.",
      },
      {
        title: 'Collision',
        description:
          'Repairs or replaces your vehicle after a collision with another car or an object, regardless of who was at fault, minus your deductible.',
      },
      {
        title: 'Comprehensive',
        description:
          'Covers damage that is not a collision — hail, falling limbs, fire, flood, theft, vandalism, and the deer that steps out at dusk. Deductibles are usually lower than collision.',
      },
      {
        title: 'Uninsured & Underinsured Motorist',
        description:
          'Steps in when the driver who hit you has no insurance or nowhere near enough of it. It is one of the least expensive lines on the policy and the one we most often find set too low.',
      },
      {
        title: 'Medical Payments',
        description:
          'Pays medical bills for you and your passengers after an accident no matter who caused it, usually with no deductible and no wait for a liability decision.',
      },
    ],
    optionalCoverages: [
      {
        title: 'Roadside Assistance & Towing',
        description:
          'Towing, jump starts, flat tire changes, lockout service and fuel delivery, typically for a few dollars per vehicle per term.',
      },
      {
        title: 'Rental Reimbursement',
        description:
          'Pays for a rental car while your vehicle is in the shop for a covered claim, up to a daily and total limit you select.',
      },
      {
        title: 'Loan / Lease Gap Coverage',
        description:
          'If your vehicle is totaled, pays the difference between what you still owe and what the vehicle was actually worth. Worth having on most financed vehicles in their first few years.',
      },
      {
        title: 'New Vehicle Replacement',
        description:
          'Replaces a totaled late-model vehicle with a comparable new one instead of paying depreciated value. Availability and eligibility vary by carrier.',
      },
      {
        title: 'Full Glass Coverage',
        description:
          'Repairs or replaces windshields and side glass with a reduced or waived deductible — useful on vehicles with sensors built into the windshield.',
      },
      {
        title: 'Custom Parts & Equipment',
        description:
          'Insures lift kits, wheels, toppers, audio systems, wraps and other aftermarket add-ons that a standard policy values at nothing.',
      },
      {
        title: 'OEM Parts Endorsement',
        description:
          'Requires manufacturer parts rather than aftermarket parts on covered repairs, which some newer vehicles and leases effectively demand.',
      },
    ],
    whoNeedsIt: [
      'Households adding a teen or newly licensed driver',
      'Anyone financing or leasing a vehicle',
      'Drivers who run errands or haul tools for work in a personal vehicle',
      'Owners of older, paid-off vehicles weighing whether to keep full coverage',
      'Drivers with a recent ticket, at-fault accident or lapse in coverage',
      'Families with a student driving at college in another state',
    ],
    savings: [
      'Bundling auto with home, farm or life at the same carrier',
      'Insuring more than one vehicle on the same policy',
      'Paid-in-full, paperless and automatic payment credits',
      'Good student and driver training discounts',
      'Defensive driving and mature driver course completion',
      'Raising collision and comprehensive deductibles',
      'Telematics and safe-driving programs, where offered',
      'Claims-free and continuous coverage credits',
    ],
    faqs: [
      {
        question: 'How much auto insurance do I actually need?',
        answer:
          "Ohio's minimum is $25,000 per person and $50,000 per accident for injuries, plus $25,000 for property damage. Modern vehicles and medical bills blow through that quickly. Most of our clients carry at least $100,000/$300,000/$100,000 and match their uninsured motorist limits to their liability limits. The right number depends on what you have to lose — liability protects your savings, your home and your future wages, so that is where we start.",
      },
      {
        question: 'Will my rate go up if I file a claim?',
        answer:
          'Not always. A comprehensive claim such as hail damage or a deer strike is usually treated differently than an at-fault collision, and many carriers offer accident forgiveness after a stretch of clean driving. Call us before you file — we will tell you honestly whether the claim is likely to be worth it.',
      },
      {
        question: 'Do I still need collision coverage on an older car?',
        answer:
          "It depends on what the vehicle is worth and whether you could replace it out of pocket tomorrow. Once the annual cost of collision coverage starts approaching ten percent of the car's value, it is worth a conversation. Keeping comprehensive while dropping collision is often a reasonable middle ground.",
      },
      {
        question: 'When do I need to add my teenager to the policy?',
        answer:
          'As soon as they hold a permit, they should be listed. Most carriers charge little or nothing while a driver has a permit but require them to be rated once they are licensed. Leaving a licensed driver off the policy can create a coverage problem at exactly the wrong moment.',
      },
      {
        question: 'Does my policy cover a rental car on vacation?',
        answer:
          'In most cases your liability and physical damage coverage extends to a rental vehicle in the United States, but limits, loss-of-use charges and administrative fees vary. Call before you travel and we will confirm exactly what applies so you can decline the counter coverage with confidence.',
      },
      {
        question: 'What is gap coverage and do I need it?',
        answer:
          'New vehicles depreciate faster than a loan pays down. If yours were totaled today and you owe more than it is worth, gap coverage pays the difference so you are not making payments on a vehicle you no longer have. It is inexpensive and worth having on most financed vehicles for the first several years.',
      },
    ],
    related: ['home', 'recreational', 'life'],
  },

  /* ------------------------------------------------------------------ HOME */
  {
    id: 'home',
    policyLabel: 'a homeowners policy',
    name: 'Home Insurance',
    category: 'Personal Insurance',
    icon: icon + 'home.png',
    heroImage: img + 'home/card1.webp',
    supportingImages: [img + 'home/card2.webp', img + 'home/card3.webp'],
    tagline:
      'Protection for the building, everything inside it, and the liability that comes with owning it.',
    intro: [
      'A homeowners policy is really four policies in one. It rebuilds the structure, replaces your belongings, defends you if someone is hurt on your property, and pays your living expenses if you cannot stay in the house. Most disappointing claims are not caused by a missing coverage — they are caused by one of those four being set too low.',
      'We write homeowners, condo, renters, rental dwelling, mobile home and seasonal property coverage. If you finished the basement, added a garage, put up an outbuilding, started renting out the house you used to live in, or inherited a shop full of tools, those changes need to show up on the policy. We ask about them at renewal so you find out now rather than after a fire.',
      'Because we are independent, we can move your home to a different carrier when rates, roof rules or claims history change — without you having to start over with a new agent.',
    ],
    quickFacts: [
      { label: 'Dwelling limit is based on', value: 'Rebuild cost, not market value' },
      { label: 'Always excluded', value: 'Flood and earth movement' },
      { label: 'Review trigger', value: 'Any remodel, addition or new roof' },
    ],
    coreCoverages: [
      {
        title: 'Dwelling — Coverage A',
        description:
          'Repairs or rebuilds the house itself after a covered loss such as fire, wind, hail or a burst pipe. This limit should reflect what it costs to rebuild today with current labor and materials, which is often very different from what the house would sell for.',
      },
      {
        title: 'Other Structures — Coverage B',
        description:
          'Covers detached garages, sheds, fences, decks, driveways and outbuildings, usually at a set percentage of the dwelling limit. Large pole barns and shops often need that percentage raised.',
      },
      {
        title: 'Personal Property — Coverage C',
        description:
          'Replaces furniture, clothing, appliances, tools and electronics. Ask whether yours settles at replacement cost or actual cash value — that single word changes the size of every contents claim.',
      },
      {
        title: 'Loss of Use — Coverage D',
        description:
          'Pays for a hotel, rental home, meals and other additional living expenses while your home is uninhabitable after a covered loss.',
      },
      {
        title: 'Personal Liability — Coverage E',
        description:
          "Covers you if a guest is injured on your property, your dog bites someone, or you accidentally damage someone else's property — including the cost of defending you.",
      },
      {
        title: 'Medical Payments — Coverage F',
        description:
          'Pays smaller medical bills for a guest injured at your home regardless of fault, which often keeps a minor incident from turning into a liability claim.',
      },
    ],
    optionalCoverages: [
      {
        title: 'Scheduled Personal Property',
        description:
          'Itemizes jewelry, firearms, cameras, musical instruments, collectibles and tools that exceed the standard sublimits, usually with a lower deductible and broader perils.',
      },
      {
        title: 'Extended or Guaranteed Replacement Cost',
        description:
          'Adds a cushion above your dwelling limit — often 25% to 50% — for the times construction costs spike after a widespread storm.',
      },
      {
        title: 'Water Backup & Sump Overflow',
        description:
          'Covers damage from a failed sump pump or a backed-up drain or sewer. A standard homeowners policy excludes it, and it is one of the most common claims we see.',
      },
      {
        title: 'Service Line Coverage',
        description:
          'Pays to excavate and repair buried water, sewer, electric, gas and internet lines running from the street to your home.',
      },
      {
        title: 'Equipment Breakdown',
        description:
          'Covers mechanical and electrical failure of furnaces, air conditioning, water heaters, well pumps and major appliances — the things a standard policy will not touch.',
      },
      {
        title: 'Personal Umbrella',
        description:
          'Adds $1 million or more of liability on top of your home and auto policies. Inexpensive relative to the protection, and increasingly common for families with teen drivers or rental property.',
      },
      {
        title: 'Flood Insurance',
        description:
          'Written separately through the National Flood Insurance Program or a private carrier. Flood is excluded from every standard homeowners policy, and there is typically a 30-day waiting period before coverage starts.',
      },
      {
        title: 'Ordinance or Law',
        description:
          'Pays the extra cost of rebuilding to current building codes after a loss — a real issue on older homes that were built legally but no longer meet code.',
      },
    ],
    whoNeedsIt: [
      'Homeowners with a mortgage — nearly every lender requires it',
      'Owners who have remodeled, added square footage or finished a basement',
      'Renters who assume the landlord insures their belongings (they do not)',
      'Condo owners filling the gap between the association master policy and their unit',
      'Landlords renting out a single-family home, duplex or farmhouse',
      'Anyone storing jewelry, firearms, tools or collections of real value at home',
    ],
    savings: [
      'Bundling home and auto with the same carrier',
      'A new roof, furnace or updated electrical and plumbing',
      'Monitored alarm, water shutoff and smoke detection systems',
      'Raising the all-peril or wind and hail deductible',
      'Claims-free, loyalty and advance-quote credits',
      'Protective device, non-smoker and newer home discounts',
    ],
    faqs: [
      {
        question: 'How much dwelling coverage do I need?',
        answer:
          'Enough to rebuild the house from the foundation up at current construction costs — not what you paid for it and not what Zillow says it is worth. Land value is not part of the rebuild, which is why the two numbers rarely match. We run a replacement cost estimate at least at every renewal and after any project.',
      },
      {
        question: 'Does homeowners insurance cover flood?',
        answer:
          'No. Flood is excluded from every standard homeowners policy and has to be written separately through the National Flood Insurance Program or a private flood carrier. There is usually a 30-day waiting period, so it cannot be bought once rain is in the forecast. We can quote it whether or not you are in a mapped flood zone.',
      },
      {
        question: 'Are my jewelry and firearms fully covered?',
        answer:
          'Usually not. Standard policies cap categories like jewelry, firearms, silverware and cash at low sublimits — often $1,500 to $2,500 for theft. Scheduling those items raises the limit, drops the deductible and broadens the covered causes of loss to include things like a lost stone.',
      },
      {
        question: 'What is the difference between replacement cost and actual cash value?',
        answer:
          'Replacement cost pays what it takes to buy the item new today. Actual cash value subtracts depreciation, so a ten-year-old sofa settles for what a ten-year-old sofa is worth. Replacement cost costs a little more up front and makes a very large difference at claim time.',
      },
      {
        question: 'Do I need insurance if I rent?',
        answer:
          "Your landlord's policy covers the building, not your belongings and not your liability. A renters policy typically runs a modest amount per month and covers your property anywhere in the world, your liability, and additional living expenses if the building becomes uninhabitable.",
      },
      {
        question: 'Will filing a small claim hurt me?',
        answer:
          'It can. Claims history follows the property and the person for several years and affects both eligibility and price. If a loss is close to your deductible, call us first — we will help you weigh the payment against the long-term cost before anything is reported.',
      },
      {
        question: 'Does my policy cover a business I run from home?',
        answer:
          'Only in a very limited way. Most homeowners policies cap business property at a small amount and exclude business liability entirely. Depending on the operation, we either endorse the homeowners policy or write a small commercial policy alongside it.',
      },
    ],
    related: ['auto', 'life', 'commercial'],
  },

  /* ------------------------------------------------------------------ FARM */
  {
    id: 'farm',
    policyLabel: 'a farm policy',
    name: 'Farm Insurance',
    category: 'Agribusiness',
    icon: icon + 'farm.png',
    heroImage: img + 'farm/card1.webp',
    supportingImages: [img + 'farm/card2.webp', img + 'farm/card3.webp'],
    tagline:
      'Coverage built around how an operation actually runs — the house, the barns, the machinery, the livestock and the liability.',
    intro: [
      'Farming creates exposures a homeowners policy was never written to handle. A farm policy pulls the dwelling, the farm structures, the machinery, the livestock and the liability into a single program that can be scaled from a few acres and a hobby herd all the way up to a full row-crop and livestock operation.',
      'We write farm business in west-central Ohio every day and represent carriers that specialize in agribusiness — including feed and seed dealers, custom operators, grain handling and produce growers. Our team includes a dedicated crop insurance specialist, so multi-peril and crop-hail decisions get made with the same agent who handles your buildings and machinery.',
      'The details are where farm policies are won or lost: whether machinery is scheduled or blanketed, whether peak-season limits are high enough at planting, whether the side-by-side is actually listed, and whether liability follows you onto ground you rent from someone else. Those are the questions we walk through.',
    ],
    quickFacts: [
      { label: 'Policy form', value: 'Farmowners or standalone farm package' },
      { label: 'Most overlooked', value: 'Peak-season and stored grain limits' },
      { label: 'Crop deadlines', value: 'Set by USDA Risk Management Agency' },
    ],
    coreCoverages: [
      {
        title: 'Farm Dwelling & Household Property',
        description:
          'Covers the farmhouse and its contents on the same policy as the operation, so there is no argument about where the house ends and the farm begins.',
      },
      {
        title: 'Farm Structures',
        description:
          'Barns, machine sheds, grain bins, silos, milk houses, shops, fences, corrals and other outbuildings — scheduled individually or blanketed together depending on how many you have.',
      },
      {
        title: 'Scheduled & Unscheduled Farm Personal Property',
        description:
          'Tractors, combines, planters, wagons, tools, tile, chemicals, seed and feed. High-value machinery is normally scheduled by serial number; smaller items are covered under a blanket limit.',
      },
      {
        title: 'Livestock',
        description:
          'Covers cattle, hogs, sheep, horses and poultry against named perils such as fire, lightning, drowning, electrocution, accidental shooting and loss while in transit.',
      },
      {
        title: 'Farm Liability',
        description:
          'Responds when the operation causes injury or damage — a visitor hurt in the barn lot, livestock that get onto the road, or spray drift onto a neighbor. Includes your legal defense.',
      },
      {
        title: 'Products & Completed Operations',
        description:
          'Protects you when what you sell — hay, produce, eggs, livestock, custom work — causes injury or damage after it has left the farm.',
      },
    ],
    optionalCoverages: [
      {
        title: 'Peak Season Coverage',
        description:
          'Temporarily raises limits on feed, seed, fertilizer and chemicals during the weeks when the most inventory is sitting on the place.',
      },
      {
        title: 'Stored Grain & Crops in Storage',
        description:
          'Insures grain in bins and crops in storage against fire, wind and other covered causes of loss, including the collapse coverage bins often need.',
      },
      {
        title: 'Crop Insurance — MPCI & Crop-Hail',
        description:
          'Federal multi-peril crop insurance protects yield or revenue on growing crops; private crop-hail covers hail and fire damage acre by acre. Both have firm calendar deadlines.',
      },
      {
        title: 'Farm Auto & Trucking',
        description:
          'Covers farm trucks, semis, grain trailers and hauling — including hauling for hire, which changes the rating and the filings required.',
      },
      {
        title: 'ATVs, UTVs & Side-by-Sides',
        description:
          'Schedules Rangers, Gators and four-wheelers for physical damage and liability on and off the farm, where a homeowners policy usually stops at the property line.',
      },
      {
        title: 'Pollution & Custom Farming Liability',
        description:
          'Addresses manure release, chemical application drift and liability arising from custom work performed on someone else’s ground.',
      },
      {
        title: 'Workers Compensation & Employers Liability',
        description:
          'For operations with hired or seasonal help. In Ohio, workers compensation is purchased through the state Bureau of Workers’ Compensation, with stop-gap employers liability added to your farm policy.',
      },
      {
        title: 'Equipment Breakdown & Confinement Systems',
        description:
          'Covers mechanical and electrical failure of grain systems, coolers and HVAC, plus livestock losses caused by ventilation or power failure in confinement barns.',
      },
    ],
    whoNeedsIt: [
      'Row-crop and livestock operations of any size',
      'Hobby farms and acreages that have outgrown a homeowners policy',
      'Landowners who cash-rent ground but still own buildings and machinery',
      'Custom operators, feed and seed dealers and grain handlers',
      'Anyone boarding horses, selling produce or hosting the public on the farm',
      'Multi-generation operations planning a transition to the next generation',
    ],
    savings: [
      'Combining the farmhouse, machinery and liability into one farm package',
      'Newer buildings, updated wiring and on-farm fire protection',
      'Blanketing buildings instead of insuring each one separately',
      'Higher deductibles on machinery and structures',
      'Farm association, multi-policy and claims-free credits',
      'Accurate, current values so you are not paying for coverage you no longer need',
    ],
    faqs: [
      {
        question: 'I have a homeowners policy on the farmhouse. Is that enough?',
        answer:
          'No. Homeowners policies exclude farming as a business activity. That means the machinery, the livestock, the outbuildings used for the operation and — most importantly — the farm liability are all outside the policy. A farm or farmowners policy is written specifically to include them.',
      },
      {
        question: 'What is the difference between crop insurance and a farm policy?',
        answer:
          'A farm policy insures physical property and liability: buildings, machinery, livestock and the people who come onto your place. Crop insurance protects the yield or revenue of a growing crop through a federally regulated program with fixed sign-up deadlines. Most operations need both, and we can handle them together.',
      },
      {
        question: 'Do I need farm coverage if I only farm part time?',
        answer:
          'Often yes. A few head of cattle, a roadside stand, a hay operation or a shop full of equipment is enough to create exposures a homeowners policy will not cover. A small hobby farm policy usually costs less than people expect and closes some very large gaps.',
      },
      {
        question: 'Are my ATVs and side-by-sides covered?',
        answer:
          'Only if they are listed. Homeowners policies typically give limited or no coverage once a recreational vehicle leaves the premises, and liability is the bigger risk. Scheduling them on the farm policy covers both the machine and the injury it could cause.',
      },
      {
        question: 'What happens if my cattle get out and cause an accident?',
        answer:
          'Farm liability is generally the coverage that responds to injuries and property damage caused by escaped livestock, including your legal defense. What matters is the limit — this is one of the exposures we recommend backing with an umbrella.',
      },
      {
        question: 'When do I need to make crop insurance decisions?',
        answer:
          "Federal crop insurance runs on firm dates set by USDA's Risk Management Agency — sales closing, acreage reporting and production reporting all fall on set calendar days, and coverage cannot be added or changed after a deadline passes. Call well ahead of the date for your crop so there is time to compare options.",
      },
    ],
    related: ['commercial', 'auto', 'home'],
  },

  /* ------------------------------------------------------------ COMMERCIAL */
  {
    id: 'commercial',
    policyLabel: 'a commercial policy',
    name: 'Commercial Insurance',
    category: 'Business Insurance',
    icon: icon + 'commercial.png',
    heroImage: img + 'commercial/card1.webp',
    supportingImages: [
      img + 'commercial/card2.webp',
      img + 'commercial/card3.webp',
    ],
    tagline:
      'Property, liability, vehicles, employees and bonds — sized for the business you have actually built.',
    intro: [
      'No two businesses carry the same risk. A contractor worries about tools, a truck and the job site. A retailer worries about inventory, a slip and fall, and a data breach. A manufacturer worries about equipment breakdown and product liability. A commercial program from STF starts with a conversation about how you make money and what would stop it.',
      'Most small businesses begin with a Business Owner’s Policy, which packages property and general liability together for less than buying them separately, then add what the operation actually needs — commercial auto, stop-gap employers liability, an umbrella, cyber coverage and bonds.',
      'We also handle the paperwork that comes with running a business: certificates of insurance, additional insured endorsements, waivers of subrogation, loss runs for a bid, and premium audits at the end of the term. Most certificate requests go out the same day.',
    ],
    quickFacts: [
      { label: 'Common starting point', value: "Business Owner's Policy (BOP)" },
      { label: 'Ohio workers comp', value: 'Purchased through the state BWC' },
      { label: 'Certificates of insurance', value: 'Usually issued same day' },
    ],
    coreCoverages: [
      {
        title: 'General Liability',
        description:
          'Covers bodily injury, property damage and personal or advertising injury claims arising from your premises, operations and products — including the cost to defend you even when the claim has no merit.',
      },
      {
        title: 'Commercial Property',
        description:
          'Covers your building, tenant improvements, equipment, inventory and business personal property against fire, wind, theft and other covered causes of loss.',
      },
      {
        title: 'Business Income & Extra Expense',
        description:
          'Replaces lost profit and pays continuing expenses such as payroll and rent while you are shut down after a covered property loss. This is the coverage most often left off a policy and most often needed.',
      },
      {
        title: 'Commercial Auto',
        description:
          'Covers owned, hired and non-owned vehicles — service vans, box trucks, dump trucks and employees running errands in their own cars.',
      },
      {
        title: 'Stop-Gap Employers Liability',
        description:
          'Ohio is a monopolistic workers compensation state, so benefits come through the Bureau of Workers’ Compensation. Stop-gap coverage on your commercial policy fills the employers liability piece the BWC does not provide.',
      },
      {
        title: 'Inland Marine — Tools & Equipment',
        description:
          'Covers tools, mobile equipment, installation material and property in transit or at a job site, where a building-based property policy stops.',
      },
    ],
    optionalCoverages: [
      {
        title: 'Commercial Umbrella',
        description:
          'Adds a layer of limit above your general liability, commercial auto and employers liability — often required by larger contracts and landlords.',
      },
      {
        title: 'Cyber Liability & Data Breach',
        description:
          'Covers notification costs, ransomware payments and recovery, fraudulent funds transfer, business interruption and the liability that follows a breach of customer data.',
      },
      {
        title: 'Professional Liability (E&O)',
        description:
          'Responds when your advice, design, service or work product is alleged to have caused someone a financial loss — a claim general liability does not cover.',
      },
      {
        title: 'Employment Practices Liability',
        description:
          'Covers wrongful termination, discrimination, retaliation and harassment claims brought by employees or applicants.',
      },
      {
        title: 'Surety & Fidelity Bonds',
        description:
          'License and permit bonds, performance and payment bonds for contracts, notary bonds, and employee dishonesty coverage for theft by staff.',
      },
      {
        title: 'Equipment Breakdown',
        description:
          'Covers the mechanical and electrical failure of HVAC, refrigeration, production equipment and computer systems, including spoiled stock.',
      },
      {
        title: 'Liquor Liability',
        description:
          'Required for most establishments that sell or serve alcohol, and specifically excluded from a standard general liability policy.',
      },
      {
        title: 'Builders Risk',
        description:
          'Insures a structure, its materials and its equipment during construction or renovation until the project is complete.',
      },
    ],
    whoNeedsIt: [
      'Contractors, trades and service businesses',
      'Retail shops, restaurants and taverns',
      'Manufacturers, distributors and warehouses',
      'Trucking, delivery and towing fleets',
      'Professional offices, clinics and consultants',
      'Anyone who has been asked for a certificate of insurance or additional insured status',
    ],
    savings: [
      'Packaging property and general liability into a BOP',
      'Documented safety programs, training records and driver screening',
      'Higher deductibles or a self-insured retention on larger accounts',
      'Alarm, sprinkler and fire suppression systems',
      'Accurate payroll and sales classifications so audits do not surprise you',
      'Association and multi-policy program credits',
    ],
    faqs: [
      {
        question: 'How much general liability do I need?',
        answer:
          'Most contracts, landlords and municipalities ask for $1 million per occurrence and $2 million aggregate, and that is the common starting point. The right number for you depends on the size of the jobs you take and the assets behind the business — when contracts get larger, an umbrella is usually cheaper than raising the underlying limit.',
      },
      {
        question: 'Do I have to carry workers compensation in Ohio?',
        answer:
          'If you have employees, yes — and in Ohio it is purchased from the state Bureau of Workers’ Compensation rather than a private insurer. Sole proprietors and partners can elect coverage on themselves. We add stop-gap employers liability to your commercial policy to cover the piece BWC does not.',
      },
      {
        question: 'Is my personal auto policy enough for the work truck?',
        answer:
          'Almost never. Personal auto policies limit or exclude business use, and if the vehicle is titled to the business there is usually no coverage at all. A commercial auto policy also handles the higher liability limits and filings that contracts and the DOT may require.',
      },
      {
        question: 'What is a certificate of insurance and how fast can I get one?',
        answer:
          'It is a one-page proof of the coverage you carry, usually requested by a customer, general contractor or landlord before you can start work. Send us the requirements and the certificate holder’s information and we can normally have it out the same day.',
      },
      {
        question: 'Are employees covered when they drive their own cars for work?',
        answer:
          "Their personal policy responds first, but the business can still be pulled into the claim. Hired and non-owned auto coverage protects the business when an employee is driving a personal or rented vehicle on company business. It is inexpensive and frequently missing.",
      },
      {
        question: 'Does my business policy cover a cyber attack?',
        answer:
          'A standard property and liability policy provides little or nothing for ransomware, wire fraud or a data breach. Cyber coverage is written as an endorsement or a standalone policy and typically includes a breach response team, which is the part most businesses need first.',
      },
      {
        question: 'What happens at a premium audit?',
        answer:
          'Many commercial policies are rated on estimated payroll or sales. At the end of the term the carrier compares the estimate to the actual figures and bills or refunds the difference. Keeping your estimates realistic during the year prevents an unpleasant bill at the end of it.',
      },
    ],
    related: ['farm', 'auto', 'life'],
  },

  /* ----------------------------------------------------------- RECREATIONAL */
  {
    id: 'recreational',
    policyLabel: 'a recreational policy',
    name: 'Recreational Insurance',
    category: 'Personal Insurance',
    icon: icon + 'recreational.png',
    heroImage: img + 'recreational/card1.webp',
    supportingImages: [
      img + 'recreational/card2.webp',
      img + 'recreational/card3.webp',
    ],
    tagline:
      'Boats, campers, RVs, motorcycles, ATVs, golf carts and collector cars — insured for how you actually use them.',
    intro: [
      'Homeowners and auto policies were not written for a pontoon on the lake, a fifth wheel headed south for the winter, or a side-by-side on a trail. Most give you very little coverage once the toy leaves your driveway, and almost none for the liability that comes with operating it.',
      'A recreational policy puts physical damage, liability and medical coverage where they belong, and it usually costs far less than people expect — many units are seasonal, and premiums reflect that. If you own several, we can often schedule them together and pick up a multi-unit credit.',
      'We also handle the details that matter on these policies: agreed value on a restored classic, personal effects for the fishing gear on the boat, campsite liability for the RV, and lay-up periods so you are not paying full freight for a machine sitting in a shed in January.',
    ],
    quickFacts: [
      { label: 'Ohio watercraft', value: 'Not state-required; marinas often are' },
      { label: 'Motorcycles', value: 'Liability required, same as a car' },
      { label: 'Common gap', value: 'Off-premises ATV and golf cart use' },
    ],
    coreCoverages: [
      {
        title: 'Liability',
        description:
          'Covers injuries or property damage you cause while operating the unit — including the legal defense, which on a serious water or trail incident can be the largest cost of all.',
      },
      {
        title: 'Comprehensive & Collision',
        description:
          'Repairs or replaces your unit after a collision, fire, theft, storm damage, vandalism or sinking, minus your deductible.',
      },
      {
        title: 'Uninsured & Underinsured Boater or Motorist',
        description:
          'Pays for your injuries when the other operator carries no insurance or not enough of it. On the water and on a motorcycle this is a very real possibility.',
      },
      {
        title: 'Medical Payments',
        description:
          'Pays medical bills for you and your passengers regardless of who was at fault, usually with no deductible.',
      },
      {
        title: 'Trailer Coverage',
        description:
          'Insures the trailer that hauls the boat, the side-by-side or the motorcycle, which is separate property and frequently forgotten.',
      },
      {
        title: 'Roadside & On-Water Towing',
        description:
          'Pays for towing, jump starts and on-water assistance — a single tow back to the ramp can cost more than the coverage does for the year.',
      },
    ],
    optionalCoverages: [
      {
        title: 'Agreed Value / Total Loss Replacement',
        description:
          'Pays an amount you and the carrier agree on in advance rather than a depreciated value. Standard on collector cars and common on newer boats and RVs.',
      },
      {
        title: 'Personal Effects',
        description:
          'Covers fishing gear, water sports equipment, camping supplies, clothing and electronics kept in or on the unit.',
      },
      {
        title: "Full-Timer's Coverage",
        description:
          'Adds homeowners-style liability and personal property for people who live in an RV full time rather than travelling in it seasonally.',
      },
      {
        title: 'Vacation & Campsite Liability',
        description:
          'Covers injuries that happen at your campsite while the RV is parked and set up, which the driving liability does not address.',
      },
      {
        title: 'Fuel Spill & Wreckage Removal',
        description:
          'Covers the legally required cleanup and removal costs after a covered watercraft loss — an obligation that exists whether or not you can afford it.',
      },
      {
        title: 'Custom Parts & Accessories',
        description:
          'Insures aftermarket exhaust, wheels, tops, lifts, audio, wraps and other upgrades that a base policy values at zero.',
      },
      {
        title: 'Extended Navigation & Travel Territory',
        description:
          'Extends coverage beyond the standard navigational or geographic limits for longer trips.',
      },
      {
        title: 'Lay-Up & Storage Credits',
        description:
          'Reduces premium during the months the unit is stored while keeping comprehensive coverage in place for fire and theft.',
      },
    ],
    whoNeedsIt: [
      'Boat, pontoon and personal watercraft owners',
      'RV, travel trailer, camper and fifth-wheel owners',
      'Motorcycle, dirt bike and scooter riders',
      'ATV, UTV and side-by-side owners',
      'Golf cart owners, especially where carts run on public streets',
      'Classic, antique and collector vehicle owners',
    ],
    savings: [
      'Multi-unit and multi-policy discounts',
      'Boating safety and rider training course completion',
      'Lay-up periods during seasonal storage',
      'Higher deductibles on physical damage',
      'Storing units in a locked, enclosed building',
      'Clean operating record and years of experience credits',
    ],
    faqs: [
      {
        question: "Isn't my boat already covered by my homeowners policy?",
        answer:
          'Only barely. Most homeowners policies include a small amount of coverage for very small boats and low-horsepower motors, and many provide no liability at all once you are on the water. Anything larger than a jon boat with a trolling motor deserves its own policy.',
      },
      {
        question: 'Do I need insurance for my ATV or side-by-side?',
        answer:
          'Ohio does not require it for off-road use, but the exposure is real. Homeowners policies usually stop covering these machines once they leave your property, and a trail or roadway injury claim can be significant. A separate policy covers both the machine and the liability.',
      },
      {
        question: 'What is agreed value and why does it matter for a classic car?',
        answer:
          'Collector vehicles appreciate while standard policies pay depreciated value. With agreed value you and the carrier settle on the number up front, usually supported by documentation, and that is what gets paid on a total loss — no argument at the worst possible time.',
      },
      {
        question: 'Can I insure my RV while I live in it full time?',
        answer:
          "Yes, but it needs full-timer's coverage. Standard RV policies assume the unit is a vacation vehicle and a house exists somewhere else. Full-timer's coverage adds the personal liability and personal property protection a homeowners policy would normally provide.",
      },
      {
        question: 'Do I need golf cart insurance?',
        answer:
          'If the cart never leaves your property, homeowners coverage may be adequate. Once it crosses a public street, is used in a community with rules about it, or is street-modified, it usually needs its own liability coverage. Many neighborhoods and clubs now require proof.',
      },
      {
        question: 'Can I drop coverage over the winter?',
        answer:
          'We generally recommend a lay-up credit rather than cancelling. Fire, theft and storm damage happen in storage, and cancelling and rewriting each season can cost you continuous-coverage credit and complicate the next renewal.',
      },
    ],
    related: ['auto', 'home', 'life'],
  },

  /* ------------------------------------------------------------------ LIFE */
  {
    id: 'life',
    policyLabel: 'a life insurance policy',
    name: 'Life Insurance',
    category: 'Personal Insurance',
    icon: icon + 'life.png',
    heroImage: img + 'life/card1.webp',
    supportingImages: [img + 'life/card2.webp'],
    tagline:
      'A plan that keeps your family, your farm or your business financially steady if something happens to you.',
    intro: [
      'Life insurance is not really for you — it is for the people who depend on you. It pays off the mortgage, keeps an operation running, replaces income while children finish school, and covers final expenses so a grieving family is not making financial decisions in the same week as a funeral.',
      'The right policy depends entirely on why you are buying it. Term insurance is the least expensive way to cover a defined stretch of time, like the years left on a mortgage or until the youngest is out of the house. Permanent insurance costs more but lasts for life and builds cash value you can borrow against. We will quote both and show you the numbers rather than steering you to one.',
      'Because we are independent, we can also work around health history. Carriers underwrite conditions very differently, and the company that declines one applicant will sometimes offer another a preferred rate. Shopping that difference is most of the value we add on a life case.',
    ],
    quickFacts: [
      { label: 'Common starting point', value: '10–12× annual income' },
      { label: 'Cheapest time to buy', value: 'The younger and healthier you are' },
      { label: 'Business uses', value: 'Buy-sell and key person funding' },
    ],
    coreCoverages: [
      {
        title: 'Term Life',
        description:
          'Level premium and level death benefit for a set period — usually 10, 15, 20 or 30 years. The most affordable way to cover a mortgage, replace income, or protect the child-raising years.',
      },
      {
        title: 'Whole Life',
        description:
          'Permanent coverage with a guaranteed death benefit, a guaranteed level premium and cash value that grows on a guaranteed schedule. Often used for final expenses and estate planning.',
      },
      {
        title: 'Universal Life',
        description:
          'Permanent coverage with flexible premiums and an adjustable death benefit, which suits people whose income varies significantly from year to year.',
      },
      {
        title: 'Final Expense',
        description:
          'Smaller permanent policies with simplified underwriting, designed specifically to cover funeral costs, outstanding medical bills and estate settlement.',
      },
      {
        title: 'Group & Supplemental Life',
        description:
          'Coverage offered through an employer, plus individual coverage that stays with you when the job does not. Most people need more than the group amount.',
      },
      {
        title: 'Disability Income',
        description:
          'Replaces a portion of your paycheck if illness or injury keeps you from working. Statistically, a working-age adult is far more likely to be disabled than to die.',
      },
    ],
    optionalCoverages: [
      {
        title: 'Waiver of Premium',
        description:
          'Keeps the policy in force without payment if you become totally disabled — protecting the coverage at exactly the point income stops.',
      },
      {
        title: 'Accelerated Death Benefit',
        description:
          'Lets you draw on part of the death benefit early after a terminal, chronic or critical illness diagnosis.',
      },
      {
        title: 'Child & Spouse Riders',
        description:
          'Adds a modest amount of coverage on family members to an existing policy at low cost, often with a conversion option later.',
      },
      {
        title: 'Guaranteed Insurability',
        description:
          'Lets you purchase additional coverage at set future dates without new medical underwriting — valuable for young buyers.',
      },
      {
        title: 'Return of Premium',
        description:
          'Refunds the premiums paid if you outlive a term policy, at a meaningfully higher cost than standard term.',
      },
      {
        title: 'Buy-Sell Funding',
        description:
          'Funds a partnership or shareholder agreement so surviving owners can buy out an estate without draining the business.',
      },
      {
        title: 'Key Person Coverage',
        description:
          'Protects a business against the financial hit of losing an owner or an employee who would be difficult and expensive to replace.',
      },
      {
        title: 'Estate & Farm Succession Planning',
        description:
          'Creates liquidity so heirs can settle taxes or equalize an inheritance without having to sell ground or equipment.',
      },
    ],
    whoNeedsIt: [
      'Anyone with a mortgage or debt someone else would inherit',
      'Parents and guardians with children still at home',
      'Single-income households and stay-at-home parents',
      'Farmers and business owners with partners, notes or a succession plan',
      'Anyone whose only coverage would end when the job does',
      'Retirees who want final expenses covered without touching savings',
    ],
    savings: [
      'Buying while you are younger and in better health',
      'Qualifying for non-tobacco and preferred health classes',
      'Matching the term length to the years you actually need coverage',
      'Paying annually rather than monthly',
      'Layering a smaller permanent policy under a larger term policy',
      'Re-shopping older policies — pricing on new coverage has often improved',
    ],
    faqs: [
      {
        question: 'How much life insurance do I need?',
        answer:
          'A common starting point is ten to twelve times annual income, plus the mortgage, other debts and anticipated education costs, minus existing coverage and savings. For a farm or business we also look at operating notes, buy-sell obligations and what it would cost to hire out the work you do.',
      },
      {
        question: 'Should I buy term or whole life?',
        answer:
          'Term is right when the need has an end date — a mortgage, the years until the kids are grown, a business loan. Permanent is right when the need does not end — final expenses, estate liquidity, a special needs child. Many families end up with a layer of each, and there is nothing wrong with that.',
      },
      {
        question: 'I have life insurance through work. Is that enough?',
        answer:
          'Usually not. Group coverage is often one or two times salary, which rarely covers a mortgage and income replacement, and it almost always ends when the job does. An individual policy you own is portable and locks in your rate based on your health today.',
      },
      {
        question: 'Do I have to take a medical exam?',
        answer:
          'Frequently not. Many carriers now offer accelerated or simplified underwriting up to substantial face amounts, using prescription and medical databases instead of a paramedical exam. Where an exam is required, the carrier sends someone to your home or office.',
      },
      {
        question: 'Can I get coverage with a health condition?',
        answer:
          'Often yes. Carriers treat diabetes, heart history, cancer history, mental health and prescription profiles very differently from one another. This is exactly where an independent agent earns their keep — we know which companies look most favorably on which conditions.',
      },
      {
        question: 'Is the death benefit taxable?',
        answer:
          'As a general rule, life insurance death benefits paid to a named beneficiary are received income-tax free. Estate, business-owned and trust-owned arrangements can be more complicated, so coordinate large policies with your tax advisor or attorney.',
      },
      {
        question: 'Who should I name as beneficiary?',
        answer:
          'Whoever you intend the money to go to — and keep it current. A beneficiary designation controls the proceeds regardless of what a will says, so marriages, divorces, births and deaths are all reasons to call us and review it.',
      },
    ],
    related: ['home', 'auto', 'commercial'],
  },
];
