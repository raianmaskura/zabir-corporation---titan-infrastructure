export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'aviation-transit' | 'water-sanitation' | 'industrial-sez' | 'energy-transmission';
  categoryLabel: string;
  status: string;
  location: string;
  client: string;
  valueOrScale: string;
  description: string;
  image: string;
  tags: string[];
  specs: {
    label: string;
    value: string;
    detail: string;
  }[];
  engineeringHighlights: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'dac-exp-ph3',
    title: 'Dhaka Airport Terminal Expansion & High-Load Apron Infrastructure',
    subtitle: 'Civil Aviation Authority of Bangladesh (CAAB)',
    category: 'aviation-transit',
    categoryLabel: 'Civil Aviation & Transit',
    status: 'Phase III Active Delivery (92%)',
    location: 'Kurmitola, Dhaka Metropolitan Region',
    client: 'Civil Aviation Authority of Bangladesh (CAAB)',
    valueOrScale: '$480M Expansion Core',
    description: 'Independent engineering review, comprehensive quality assurance, and construction management for 230,000 m² of dual-layer flexible pavement taxiways, high-density Boeing 777-300ER/Airbus A350 apron hardstands, and deep geotechnical stabilization using stone columns and prefabricated vertical drains (PVD).',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkU6v3lQ2bW-uSLg72KOXbC1apBMVhV1sp2S-UwkqT24qkan88Me_ECE2zD_49O7E-x30auh9ClO2lzEYrkupZc9KUO9m8oB4Po5S96PFfJL9LgcL61uD0Pf2t0DPbXOzHamOlspKX10-wl43vlIRxlC4951jdxD4z5Eeaki5YO8eHwZx-RsUOTpptCUwCR6S0JynEbrz6bdCcfIAWROeY6Hee1-7N8LS3JFDrHrGue1SPWOGzfSh2Mw',
    tags: ['Aviation Taxiways', 'PVD Consolidation', 'Stone Columns', 'Code-F Bays'],
    specs: [
      { label: 'Contract Scope', value: 'Design QC & QA', detail: 'FIDIC Engineer Representative' },
      { label: 'Total Footprint', value: '34 Apron Bays', detail: 'Code-E / Code-F Compliant' },
      { label: 'Subsurface Spec', value: '850,000 lm', detail: 'Vertical wick drain matrix' },
      { label: 'Current Status', value: '92% Execution', detail: 'Commissioning Q3 2026' }
    ],
    engineeringHighlights: [
      'Engineered for 75-ton single wheel loadings with elastomeric joint sealant systems.',
      'Continuous ultrasonic non-destructive testing on concrete sub-bases achieving 42 MPa compressive strength.',
      'Hydrogeological drainage bypass preventing monsoon inundation along runway shoulders.'
    ]
  },
  {
    id: 'mrt-line-6',
    title: 'Dhaka Mass Transit Corridor: Viaducts & Deep Substructure Geotechnics',
    subtitle: 'Metropolitan Rapid Transit Axis',
    category: 'aviation-transit',
    categoryLabel: 'Civil Aviation & Transit',
    status: 'Operational',
    location: 'Metro Region: Dhaka Line 6/1, BD',
    client: 'Dhaka Mass Transit Co. (DMTCL)',
    valueOrScale: '$340M Subcontract Supervision',
    description: 'Supervision of precast segmental box girder erection across 16.4 km dual-track alignment. Deep rotary bored piling down to 54m through unstable alluvial silt with real-time laser theodolite geometric tracking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA24YfizsGUeMzcFN24ujI3EsIeT_X59UK-4Rv9a8biTiBAn5siXXqeL7AHkZ-PiZVhvibzQ99BhPU0vWROYD2woPKAqwyRFN_KpYinWZqQXW-H0jOuBQ75dqa-5nnIZ9R-6t6BVzJA2Ghx6DNYCESfN6Yr5JPUh9uA1A2FoUFiFQlxVrZrSW7j1sC_9zSDLjZDadStVoJvPvjtz90-zcfyAA-3WEj6Bkbmmg7DFKJpHuAJonxGGnGU0Q',
    tags: ['Bored Piling (1500mm)', 'Segmental Box Girders', 'Seismic Isolators'],
    specs: [
      { label: 'Corridor Length', value: '16.4 km', detail: 'Dual-track elevated alignment' },
      { label: 'Pile Depth', value: '54 Meters', detail: 'Rotary bentonite slurry bored piles' },
      { label: 'Daily Ridership', value: '500,000+ pax', detail: 'Automated platform screen gates' },
      { label: 'Quality Verification', value: '0.00% Defect', detail: 'Independent TOC sign-off' }
    ],
    engineeringHighlights: [
      'Cross-hole Sonic Logging (CSL) executed on 100% of concrete friction piles.',
      'Lead rubber seismic isolation bearings rated for Richter Magnitude 7.5 deltaic earthquakes.',
      'Launching gantry operations completed within nocturnal curfew windows to avoid urban gridlock.'
    ]
  },
  {
    id: 'chattogram-sez',
    title: 'Chattogram Special Economic Zone: Marine Defense & Master Utility Grid',
    subtitle: 'Maritime & Industrial Logistics Hub',
    category: 'industrial-sez',
    categoryLabel: 'Industrial & SEZ',
    status: 'Stage 2 Active',
    location: 'Mirsarai, Chattogram, Bay of Bengal Coastal Zone',
    client: 'BEZA / Prime Minister\'s Office',
    valueOrScale: '1,200 Acres Planned',
    description: 'Coastal hydraulic engineering comprising 9.8 km of cyclonic storm surge revetment, deep hydraulic fill dredging, armor stone seawalls, and integrated high-pressure industrial water supply rings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPxBGauAF70AfWrsQibWLBOPLyEumDqXvHKP9ME36XV3g35V3sEocZf6LNkFhUx9CY_NNW86DoQ1mTyVhxUrcImNoikXqiOPmapw9X1-YxS_xOU1Pc9KCiHuXtZa-WKgmep5UF_0_EHLtDtRjXGz33UihxooYHy0AS8uOyWEkB6t-5bap4dYnIAynQYbdGUGB6xtu1JlBD2D-foqqssAU9QpftNE8dAn7rKtzgjwmZqHOUyPsntFczww',
    tags: ['Hydraulic Sand Dredging', 'Armor Stone Seawall', 'Substation 132kV'],
    specs: [
      { label: 'Total Land Area', value: '1,200 Acres', detail: 'Marine reclaimed platform' },
      { label: 'Perimeter Defense', value: '9.8 km', detail: 'Geo-tube & 3-ton armor stone' },
      { label: 'Storm Resilience', value: 'Category 5', detail: '100-year cyclone wave run-up test' },
      { label: 'Substation Core', value: '132/33 kV', detail: 'Dual redundant feed to heavy mills' }
    ],
    engineeringHighlights: [
      'Vibro-replacement stone columns used for soil compaction under high-tonnage fabrication yards.',
      'Effluent management canals separating hypersaline tidal seawater from industrial freshwater discharges.'
    ]
  },
  {
    id: 'cwasa-sewerage',
    title: 'Chattogram Sewerage Project: Trunk Pipe-Jacking & Central WWTP',
    subtitle: 'Sanitation & Wastewater Conveyance Network',
    category: 'water-sanitation',
    categoryLabel: 'Water & Sanitation',
    status: 'Executing (78%)',
    location: 'Halishahar, Chattogram Municipal Basin',
    client: 'Chattogram WASA (CWASA)',
    valueOrScale: '100 MLD Capacity',
    description: 'Trenchless microtunneling pipe-jacking across congested urban arteries without surface disruption, terminating at a 100 MLD biological activated sludge treatment plant with advanced anaerobic digestion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnqOnZj5T5DafsJNM4ky5iG9kZSLNkabUmnNpYQx8JKb6DqN_tKvK-iyOBaAmpCC_oO69wfIN3qJhn9pZmhJhiqs0Bni9Fimtm3jj1igmSjZgW4jfk2AJKv2GHxIHwH4LHCRSWZxiUO6uzC52OdIi-lGWth6e5WaCtcMXe1vfD1Dq1zXPz6DfybmqPUyklfjclvrXiAZVHV3SH_W0fsoRFv8ekQXcc0V4QgXSbfKaLsHZSHKLaApXpzg',
    tags: ['Pipe Jacking (ND 1800)', 'Activated Sludge WWTP', 'Sludge Digestion'],
    specs: [
      { label: 'Treatment Volume', value: '100 MLD', detail: 'Municipal wastewater conveyance' },
      { label: 'Microtunnel Drive', value: '14.2 km', detail: 'Subsurface slurry TBM pipe jacking' },
      { label: 'Pipe Dimension', value: 'ND 1800mm', detail: 'Sulfate-resistant precast concrete' },
      { label: 'Discharge Quality', value: 'BOD < 10mg/l', detail: 'Meets strict Department of Environment' }
    ],
    engineeringHighlights: [
      'Zero traffic disruption across primary commercial roads during jacking pit shaft operations.',
      'Biogas capture dome powering 35% of in-plant aeration electrical blowers.'
    ]
  },
  {
    id: 'gas-scada',
    title: 'National Gas Transmission: SCADA Telemetry & Automation',
    subtitle: 'High-Pressure Energy Grid Backbone',
    category: 'energy-transmission',
    categoryLabel: 'Energy & Gas Transmission',
    status: 'Commissioned',
    location: 'Ashuganj-Dhaka Corridors, National Grid Feeders',
    client: 'Petrobangla / GTCL',
    valueOrScale: '420 km Network Span',
    description: 'Turnkey upgrade of 420 km high-pressure mainline transmission network. Integration of remote telemetry units (RTUs), ultrasonic flow meters, and real-time acoustic leak detection across 28 block valve stations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeOwADz6XaQdinxJ7eMMlIjPoBeyMzqg1u9aAxcgIphpyLs6zi3n3gUVswxwavIdLFmMTPmqBbfGJN_7bvNEhnCaMK-cmsqOVLftqImjdtTtJcPeQQAKOfrQw0tDwnRYQleNLRR-NCTpxdeiiqPaNFmEG2b_ELFXUdKdX01ulpDUW655ypDY1p2cN-JpgDtkgI8HApGOVhS2-PuWGU7YfDbFaTVRex9Ntgf4KmYpKnPJyxUz5Ae2aXDA',
    tags: ['High-Pressure ANSI 600', 'SCADA / SIL-3 Telemetry', 'Cathodic Protection'],
    specs: [
      { label: 'Pipeline Diameter', value: '30-inch OD', detail: 'API 5L X70 steel induction bends' },
      { label: 'Design Pressure', value: '1000 psig', detail: 'ANSI Class 600 rated rating' },
      { label: 'Telemetry Response', value: '< 250 ms', detail: 'Redundant satellite & fiber optic links' },
      { label: 'Safety Integrity', value: 'SIL-3 Certified', detail: 'Emergency shutdown automated valves' }
    ],
    engineeringHighlights: [
      'Deep horizontal directional drilling (HDD) crossings beneath 4 major navigable rivers.',
      'Active impressed current cathodic protection (ICCP) ensuring 50-year underground service life.'
    ]
  },
  {
    id: 'karnaphuli-training',
    title: 'Karnaphuli River Basin Training & Tidal Embankment Stabilization',
    subtitle: 'Hydro-Engineering & Navigational Safeguard',
    category: 'water-sanitation',
    categoryLabel: 'Water & Sanitation',
    status: 'Completed',
    location: 'Karnaphuli Channel, Chattogram Port Waterway, BD',
    client: 'Bangladesh Water Development Board',
    valueOrScale: '18.2 km Bank Defense',
    description: 'Hydraulic modeling, river morphology training, and placement of articulated concrete mattress revetments to safeguard critical navigation channels and industrial river banks against scour and tidal bores.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB19yWMWUl9rLoU64fDnh-GwZJPX00N_3bT0g3FkDmDv1-ZrygVAG9Xe3d4zLY35EecgHASJBCr0cHCMHuyutlhMD8_oz4f3n-F95Rup2rFsPdjBgdQXdBIh5TvoMqvSiZc-EGlDlxBz7MKLKsQDmaNnApqEJ-adzzU1aXDADJBAPleYNCSzRmsXi0A5Be-rFnN38K8cXOy5xx-d2Vc0skuGBwBxLGrIZYGhNguB8YmLYHsqXzW8QB_rg',
    tags: ['Geo-Textile Mattresses', 'Hydrographic Sonar', 'Heavy CC Blocks'],
    specs: [
      { label: 'Embankment Length', value: '18.2 km', detail: 'Tidal surge armor coverage' },
      { label: 'Scour Protection', value: 'Down to -22m', detail: 'Bathymetric multi-beam sonar checked' },
      { label: 'Mattress Placement', value: '450,000 m²', detail: 'Articulated cable-linked concrete blocks' },
      { label: 'Port Protection', value: 'Tier 1 Priority', detail: 'Main channel draft preserved at 9.5m' }
    ],
    engineeringHighlights: [
      'Real-time hydrodynamic ADCP current profiling in 4-knot tidal velocities.',
      'Riparian wetland retention fringe planting integrating mangrove bio-shields.'
    ]
  },
  {
    id: 'meghna-terminal',
    title: 'Meghna Industrial River Terminal & Multi-Modal Logistics Hub',
    subtitle: 'Inland Waterway Freight Super-Hub',
    category: 'industrial-sez',
    categoryLabel: 'Industrial & SEZ',
    status: 'Fully Operational',
    location: 'Meghna Ghat, Narayanganj, Central Freight Node',
    client: 'Private Logistics Consortium',
    valueOrScale: '120,000 TEU Throughput',
    description: 'Design and turnkey execution of a 300m marine deck over tubular steel driven piles, automated container staging yard, customs examination canopy, and access heavy haul viaduct.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuGel_kuiGlOxho6Uq3Fkk5q2h1qfOEofBqjqruG5-c8aPNhpYXNFzMmh0cgUILIWqTo1UQ1m8piNg0DNF29kf39FiM_Jw0XZp2uakO09SU5XzeKBrQo_JPAI6yDfogRFEsF0wlvsPf4EV6iarz-JqbCQC9h9Gc7OSfHWL2b697whWCKIB2ToHoznBzLZ-XduGgx3solAMuwGJVpzCcyatJRkrEcT3VpMc9kjeQPvmJoqMZ3ugCKxX1A',
    tags: ['Driven Steel Piles (1200mm)', 'Heavy Load Pavement', 'Marine Mooring Bollards'],
    specs: [
      { label: 'Berth Quay Length', value: '300 Meters', detail: 'Accommodates two 4,000 DWT vessels' },
      { label: 'Annual Throughput', value: '120,000 TEU', detail: 'Bulk & container intermodal transfers' },
      { label: 'Pile Diameter', value: '1,200 mm', detail: 'High-tensile API driven steel pipe piles' },
      { label: 'Gantry Rails', value: '60 kg/m Crane Track', detail: 'Automated electric rubber-tyred gantries' }
    ],
    engineeringHighlights: [
      'High-durability marine concrete formulation with silica fume and corrosion inhibitor admixtures.',
      'Automated terminal operating system (TOS) integrated with national customs EDI gateway.'
    ]
  }
];

export const LEADERSHIP_DATA = [
  {
    name: 'Engr. Tariqul I. Zabir',
    title: 'Managing Director & Chief Executive',
    credentials: 'FIEB • M.ASCE',
    education: 'B.Sc. Civil (BUET), M.Sc. Structural (Imperial)',
    bio: 'Over 32 years directing mega-scale transportation arteries, viaduct engineering, and government infrastructure liaisons. Former senior technical consultant to bilateral regional connectivity initiatives.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKkwaL8zrh3kf-fFsGvxIYAtDUi_6sG1UvgkvTx3_FEFNPj4RTMpmzMnnnnGn9Vbh9hdjulNS2TFGeGP6ijcFk7cPsMXmo2x4m8yeBK1K38ZOyYMzfIjGRqEXDl0x8N_SHAFlbgd-SNpUrNMrSeCz_wVz7__iAMghg5rfREKEXZfiRsalYv0GMPPPH6OTzltfHzflswB0UVormS9aBeMxb7cvyzWfVK62EQbwTPEFehu0E8IeqeiHeWQ'
  },
  {
    name: 'Dr. Arshad Rahman, PhD',
    title: 'Chief Technical Officer - Infrastructure',
    credentials: 'PE • CEng • FICE',
    education: 'PhD Geotechnical Engineering (NUS)',
    bio: 'Authority in geotechnical stabilization, seismic design of bridge structures, and high-performance concrete technology. Pioneer of advanced deep-piling supervision matrices in delta soils.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr457km97mD-NjHW3PU145oIZFieBNynzktBbHXLwE3MZwBGDnzF_72XBAUYTt2mFo4fVOMMKwVaJn5ky4Xr7IJcCnbaBk89owGEXqp8l36DSdRUYrCsdM6-0JIUgf1HVS6VjZRxhnuJIpb9Tjzc2HHLLjqqaRX9ITYVp7cvWZ_ClHRrUdz2piEErFmzMWS4snkzyhDfEC_OtvcUq8iiriHoJ0MApYtm5HgIwlUe6Y6YDfYBYrJuxYbw'
  },
  {
    name: 'Nusrat Jahan Chowdhury',
    title: 'Director, Environmental & Social Governance',
    credentials: 'IEMA • LEED AP',
    education: 'M.Sc. Environmental Policy (Oxford)',
    bio: 'Leading bilateral environmental compliance, resettlement action plans, and ecological impact assessments across industrial corridor developments and multi-purpose river barrages.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpmkzpGyHYkjU8voQJ4-FVTpOeaSowdjoXONZ8oh_aOveIK-F4B6ptiYpHcmZ_icAMDC6Qt58WUMbnktwqj95mHesHb6EMFaUt-Dcd_GaQ1K9uaj8D1T3rAOLrTbUFhxyLSabGBxyN8dteHyXGkA_hYJO8R59vIkD8nZqj8SA3TDH-89l0pOGHHoeSs-a8gkad3eC2S1s92OvVnKftsBEHUXJD4PLc8u1Zz9e5G0kPe6_iP36DAFKRRQ'
  }
];

export const NEWS_BULLETINS = [
  {
    tag: 'PROJECT MILESTONE',
    date: 'Oct 24, 2026',
    title: 'Zabir Corp Completes Apron Inspection Milestone at Dhaka Airport Terminal',
    excerpt: 'Geotechnical compression stress tests confirmed compliant with ICAO standard axle loadings ahead of projected winter commissioning schedule.',
    readTime: '3 min read'
  },
  {
    tag: 'INDUSTRY OUTLOOK',
    date: 'Sep 18, 2026',
    title: 'Hydrological Modeling Innovations in Deltaic River Civil Works',
    excerpt: 'Zabir hydrological consulting group publishes whitepaper on riverbank scour mitigation in alluvial floodplain development zones.',
    readTime: '5 min read'
  },
  {
    tag: 'CORPORATE ESG',
    date: 'Aug 30, 2026',
    title: 'Zabir Corporation Retains ISO 14001 Environmental Certification',
    excerpt: 'Annual international compliance surveillance audit confirms zero-nonconformance status across all twelve heavy civil infrastructure sites.',
    readTime: '2 min read'
  }
];
