import { DemoScenario, InspectionRecord, FaqItem } from '../types';

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'demo-1',
    title: 'DEMO 1: COMPLIANT PACKAGE',
    productName: 'ABC Premium Rice',
    category: 'Food & Grains (Packaged)',
    status: 'COMPLIANT',
    score: 94,
    imageAlt: 'Package of ABC Premium Basmati Rice with clear mandatory declarations',
    description: 'All 7 mandatory declarations under Legal Metrology Rules, 2011 detected with high optical confidence and valid standard unit formats.',
    highlights: [
      'Standard net quantity representation (5 kg) conforms to Rule 12',
      'Maximum Retail Price includes all applicable taxes clearly',
      'Complete registered manufacturer and packer address with PIN code',
      'Active customer care email and telephone line verified',
    ],
    extractedFields: [
      {
        label: 'Product Name / Generic Description',
        value: 'ABC Premium Long Grain Rice',
        confidence: 98,
        status: 'passed',
        ruleReference: 'Rule 6(1)(a)',
        boundingBox: { top: 12, left: 15, width: 70, height: 14 },
      },
      {
        label: 'Net Quantity',
        value: '5 kg (5000 g)',
        confidence: 97,
        status: 'passed',
        ruleReference: 'Rule 6(1)(b) & Rule 12',
        notes: 'Standard metric unit used with correct spacing and minimum font height',
        boundingBox: { top: 38, left: 18, width: 32, height: 12 },
      },
      {
        label: 'Maximum Retail Price (MRP)',
        value: '₹450.00 (Incl. of all taxes)',
        confidence: 99,
        status: 'passed',
        ruleReference: 'Rule 6(1)(e)',
        notes: 'Unit sale price declared as ₹90.00 / kg',
        boundingBox: { top: 56, left: 18, width: 44, height: 12 },
      },
      {
        label: 'Month & Year of Manufacture/Packing',
        value: '07/2026 (PKD)',
        confidence: 95,
        status: 'passed',
        ruleReference: 'Rule 6(1)(d)',
        boundingBox: { top: 72, left: 18, width: 35, height: 10 },
      },
      {
        label: 'Manufacturer & Packer Details',
        value: 'ABC Foods Pvt. Ltd., Industrial Estate, Sector 4, Sonipat 131001',
        confidence: 92,
        status: 'passed',
        ruleReference: 'Rule 6(1)(c)',
        boundingBox: { top: 84, left: 15, width: 70, height: 12 },
      },
      {
        label: 'Consumer Care Information',
        value: 'customercare@abcfoods.example / 1800-11-2345',
        confidence: 94,
        status: 'passed',
        ruleReference: 'Rule 6(1)(g)',
        boundingBox: { top: 48, left: 55, width: 38, height: 22 },
      },
    ],
    evidenceNotes: 'All mandatory text blocks meet minimum font size requirements based on package area. High OCR clarity across all detected segments.',
    inspectorActionRecommended: 'Routine verification complete. Proceed to save digital inspection record.',
  },
  {
    id: 'demo-2',
    title: 'DEMO 2: UNCERTAIN PACKAGE',
    productName: 'EverFresh Ground Turmeric',
    category: 'Spices & Condiments',
    status: 'NEEDS REVIEW',
    score: 72,
    imageAlt: 'Package of turmeric powder with fold crease over consumer care details',
    description: 'Critical text in the consumer care box is partially obscured due to package fold/lighting glare. Confidence falls below automated confirmation threshold.',
    highlights: [
      'Net quantity and MRP detected reliably',
      'Customer helpline phone digits partially obscured by packaging seal',
      'Date of packing format requires inspector date sanity check',
      'System flags OCR ambiguity for human-in-the-loop review',
    ],
    extractedFields: [
      {
        label: 'Product Name',
        value: 'EverFresh Pure Ground Turmeric',
        confidence: 94,
        status: 'passed',
        ruleReference: 'Rule 6(1)(a)',
        boundingBox: { top: 14, left: 15, width: 70, height: 14 },
      },
      {
        label: 'Net Quantity',
        value: '200 g',
        confidence: 91,
        status: 'passed',
        ruleReference: 'Rule 6(1)(b)',
        boundingBox: { top: 36, left: 18, width: 28, height: 11 },
      },
      {
        label: 'Maximum Retail Price (MRP)',
        value: '₹68.00 (Incl. of all taxes)',
        confidence: 93,
        status: 'passed',
        ruleReference: 'Rule 6(1)(e)',
        boundingBox: { top: 52, left: 18, width: 40, height: 12 },
      },
      {
        label: 'Consumer Care Helpline',
        value: 'support@everfresh... [Phone obscured: 9812-???-??]',
        confidence: 67,
        status: 'review',
        ruleReference: 'Rule 6(1)(g)',
        notes: 'Low OCR score due to fold reflection. Requires manual verification or re-scan.',
        boundingBox: { top: 70, left: 18, width: 65, height: 16 },
      },
      {
        label: 'Packer Address',
        value: 'EverFresh Agro, Plot 12, Spice Park, Guntur 522004',
        confidence: 88,
        status: 'passed',
        ruleReference: 'Rule 6(1)(c)',
        boundingBox: { top: 88, left: 15, width: 68, height: 10 },
      },
    ],
    evidenceNotes: 'System detected low optical contrast on consumer care bounding box (67% confidence). Inspector visual inspection recommended.',
    inspectorActionRecommended: 'Inspect the physical packaging fold or capture a second angled photo focusing on the bottom-right label.',
  },
  {
    id: 'demo-3',
    title: 'DEMO 3: POTENTIAL ISSUE',
    productName: 'Golden Crunch Butter Cookies',
    category: 'Confectionery & Biscuits',
    status: 'POTENTIAL ISSUE',
    score: 58,
    imageAlt: 'Cookie package showing missing unit sale price and ambiguous packer details',
    description: 'Potential discrepancy flagged: Unit Sale Price (USP) missing on package over 100g, and ambiguous manufacturer without complete geographical coordinates.',
    highlights: [
      'Unit Sale Price (USP) mandate under amended Rule 6(1)(e) not identified',
      'Manufacturer listed only by trading brand name without complete address/PIN',
      'Dual pricing or sticker tampering indicator highlighted by edge analysis',
      'Immediate inspector verification and evidence logging recommended',
    ],
    extractedFields: [
      {
        label: 'Product Name',
        value: 'Golden Crunch Butter Cookies',
        confidence: 95,
        status: 'passed',
        ruleReference: 'Rule 6(1)(a)',
        boundingBox: { top: 12, left: 15, width: 70, height: 14 },
      },
      {
        label: 'Net Quantity',
        value: '350 g',
        confidence: 89,
        status: 'passed',
        ruleReference: 'Rule 6(1)(b)',
        boundingBox: { top: 34, left: 18, width: 28, height: 11 },
      },
      {
        label: 'Unit Sale Price (USP)',
        value: 'NOT DETECTED (Mandatory for >100g packaged foods)',
        confidence: 32,
        status: 'failed',
        ruleReference: 'Rule 6(1)(e) Amendment',
        notes: 'Required declaration of price per gram or per 100g is absent from the principal display panel.',
        boundingBox: { top: 50, left: 18, width: 45, height: 14 },
      },
      {
        label: 'Manufacturer Address Completeness',
        value: 'Manufactured for "GC Brand", India [Missing specific street & PIN]',
        confidence: 45,
        status: 'failed',
        ruleReference: 'Rule 6(1)(c)',
        notes: 'Rule requires complete registered street address and PIN code of manufacturer or packer.',
        boundingBox: { top: 68, left: 18, width: 68, height: 16 },
      },
      {
        label: 'Maximum Retail Price (MRP)',
        value: '₹120.00 (Sticker overlay detected over pre-printed ₹105.00)',
        confidence: 62,
        status: 'review',
        ruleReference: 'Rule 6(1)(e) & Section 18',
        notes: 'Edge boundary analysis detected potential re-stickering on price panel.',
        boundingBox: { top: 86, left: 18, width: 55, height: 12 },
      },
    ],
    evidenceNotes: 'Multiple rule non-conformances flagged. Bounding box coordinates tagged with photographic proof for inspector review.',
    inspectorActionRecommended: 'Verify physical sticker integrity and prepare structured Inspection Memo if discrepancies are verified.',
  },
];

export const DASHBOARD_STATS = {
  totalInspections: 12458,
  compliant: 9820,
  needsReview: 1870,
  potentialIssues: 768,
  activeInspectors: 342,
  districtsCovered: 58,
};

export const INSPECTION_ACTIVITY_DATA = [
  { month: 'Apr', compliant: 1420, needsReview: 280, issues: 110 },
  { month: 'May', compliant: 1680, needsReview: 310, issues: 135 },
  { month: 'Jun', compliant: 1890, needsReview: 360, issues: 142 },
  { month: 'Jul', compliant: 2150, needsReview: 420, issues: 175 },
  { month: 'Aug', compliant: 2680, needsReview: 500, issues: 206 },
];

export const COMPLIANCE_DISTRIBUTION_DATA = [
  { name: 'Compliant', value: 9820, color: '#10B981' },
  { name: 'Needs Review', value: 1870, color: '#F59E0B' },
  { name: 'Potential Issues', value: 768, color: '#EF4444' },
];

export const COMMON_ISSUES_DATA = [
  { issue: 'Unit Sale Price (USP) Missing', count: 324 },
  { issue: 'Incomplete Packer Address / PIN', count: 218 },
  { issue: 'Consumer Care Helpline Missing', count: 184 },
  { issue: 'Net Qty Format / Standard Unit', count: 142 },
  { issue: 'Date of Packing / Import Format', count: 98 },
  { issue: 'Re-stickering / Price Discrepancy', count: 64 },
];

export const CATEGORY_DATA = [
  { category: 'Packaged Food & Grains', percentage: 42 },
  { category: 'Edible Oils & Dairy', percentage: 24 },
  { category: 'Personal Care & Cosmetics', percentage: 18 },
  { category: 'Household & Detergents', percentage: 16 },
];

export const SAMPLE_HISTORY_RECORDS: InspectionRecord[] = [
  {
    id: 'INSP-2026-8941',
    productName: 'ABC Premium Rice 5kg',
    batchNumber: 'BATCH-AUG-26A',
    inspectionDate: '26 Aug 2026',
    score: 94,
    status: 'COMPLIANT',
    inspectorId: 'INS-DEL-104',
    district: 'North Delhi',
  },
  {
    id: 'INSP-2026-8120',
    productName: 'ABC Premium Rice 5kg',
    batchNumber: 'BATCH-AUG-19K',
    inspectionDate: '20 Aug 2026',
    score: 88,
    status: 'NEEDS REVIEW',
    inspectorId: 'INS-DEL-089',
    district: 'South Delhi',
  },
  {
    id: 'INSP-2026-7492',
    productName: 'ABC Premium Rice 5kg',
    batchNumber: 'BATCH-JUL-99Z',
    inspectionDate: '10 Aug 2026',
    score: 91,
    status: 'COMPLIANT',
    inspectorId: 'INS-DEL-104',
    district: 'North Delhi',
  },
  {
    id: 'INSP-2026-6810',
    productName: 'ABC Premium Rice 5kg',
    batchNumber: 'BATCH-JUL-42P',
    inspectionDate: '02 Aug 2026',
    score: 72,
    status: 'POTENTIAL ISSUE',
    inspectorId: 'INS-HR-045',
    district: 'Gurugram',
  },
];

export const AUDIT_TRAIL_LOGS = [
  {
    time: '2026-08-26 14:32:10 IST',
    action: 'Inspection Record Saved & Digitally Signed',
    inspector: 'Inspector R. Sharma (ID: INS-DEL-104)',
    target: 'ABC Premium Rice 5kg (INSP-2026-8941)',
    hash: 'SHA256:7f8a9b...4e2c',
  },
  {
    time: '2026-08-26 14:31:45 IST',
    action: 'Rule Check Evaluation Completed',
    inspector: 'System Engine v2.4 (Rules 2011 Config v3)',
    target: 'Evaluated 7 mandatory clauses • Score 94/100',
    hash: 'SHA256:a1b2c3...99ee',
  },
  {
    time: '2026-08-26 14:30:12 IST',
    action: 'Dual Image Capture & OCR Extraction',
    inspector: 'Inspector Device Pixel 8 (UUID: 49fa-11b)',
    target: 'Front & Back Label multi-view capture',
    hash: 'SHA256:d4e5f6...1234',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is PackCheck AI?',
    answer:
      'PackCheck AI is an AI-assisted platform designed to support packaged commodity inspection and Legal Metrology compliance screening under the Legal Metrology (Packaged Commodities) Rules, 2011.',
  },
  {
    question: 'How does PackCheck AI inspect products?',
    answer:
      'It uses package images, OCR and AI-assisted information extraction, followed by configured compliance checks against mandatory statutory requirements.',
  },
  {
    question: 'Does PackCheck AI replace inspectors?',
    answer:
      'No. It assists inspectors by extracting information and highlighting potential issues. Final verification remains with the authorized inspector.',
  },
  {
    question: 'What happens if the image is unclear?',
    answer:
      'The system should identify insufficient image quality and request a clearer image or manual review, highlighting specific low-confidence regions for human inspection.',
  },
  {
    question: 'Can multiple package images be used?',
    answer:
      'Yes, the workflow can support multiple views such as front, back and side labels where implemented to capture complete declarations spread across panels.',
  },
  {
    question: 'Can compliance rules be updated?',
    answer:
      'The system should use configurable/versioned rule data so requirements can be updated without redesigning the entire application as legislative amendments are notified.',
  },
  {
    question: 'Who can use PackCheck AI?',
    answer:
      'The platform is designed around inspector, administrator and citizen/consumer workflows where supported by the application.',
  },
];
