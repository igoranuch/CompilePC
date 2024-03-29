import { ProductCategories } from '../src/common/constants';

// collection categories
export type Category = {
  id: string;
  name: string;
};

export type Offer = {
  storeId: string;
  price: number;
  link: string;
};

export type PriceRange = {
  minPrice: number;
  maxPrice: number;
};

export type ParsedPrice = Price | null;

export type Price = {
  offers: Offer[];
  range: PriceRange;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  mainImage: string;
  description?: string;
  officialWebsite?: string;
  manufacturer?: string;
  price: Price;
};

export type Store = {
  id: string;
  name: string;
  imageUrl: string;
};

// collection CPUs
export type CPU = Product & {
  series: string;
  codeName: string;
  socket: string;
  lithography?: string;
  cores: string;
  threads: string;
  clockSpeed: string;
  turboBoost: string;
  l1Cache?: string;
  l2Cache: string;
  l3Cache: string;
  IGP: string;
  TDP: string;
  PCIExpress: string;
  maxOperatingTemperature?: string;
  maxDDR3Speed?: string;
  maxDDR4Speed?: string;
  maxDDR5Speed?: string;
  channels?: string;
  ramType: string | string[];
};

export type Filter = Record<string, string | string[]>;

// collection graphicsCards
export type GraphicsCard = Product & {
  vendor: string;
  interface: string;
  architecture?: string;
  GPUModel: string;
  memorySize: string;
  memoryType: string;
  memoryBus: string;
  GPUClockSpeed: string;
  lithography?: string;
  maxResolution?: string;
  HDMI: string;
  HDMIVersion: string;
  displayPort?: string;
  displayPortVersion?: string;
  directX: string;
  openGL: string;
  isVRReady: boolean;
  streamProcessors: string;
  textureUnits?: string;
  monitorsConnection: string;
  cooling: string;
  fans: string;
  additionalPower: string;
  power: number;
  numberOfSlots: string;
  size: string; // e.g. 200x123x38
};

export type MotherboardFormFactor =
  | 'mini-ITX'
  | 'micro-ATX'
  | 'ATX'
  | 'E-ATX'
  | 'XL-ATX';

// collection motherboards
export type Motherboard = Product & {
  socket: string;
  formFactor: MotherboardFormFactor;
  powerPhases?: string;
  VRMHeatsink?: boolean;
  size?: string; // e.g. 226x211 mm
  chipset?: string;
  BIOS?: string;
  DDR4?: string;
  memoryModule?: string;
  operationMode?: string;
  maxClockFrequency?: string;
  maxMemory?: string;
  VGA?: boolean;
  HDMI?: boolean;
  HDMIVersion?: string;
  displayPort?: boolean;
  displayPortVersion?: string;
  audiochip?: string;
  sound?: string;
  sata3: string;
  lanRJ45?: string;
  lanPorts?: string;
  lanController?: string;
  m2connector: string;
  m2: string;
  PCI_E_1x?: string;
  PCI_E_16x?: string;
  PCIExpressVerison: string;
  ExternalUSB_2_0?: string;
  ExternalUSB_3_2_gen1?: string;
  ExternalUSB_3_2_gen2?: string;
  InternalUSB_2_0?: string;
  InternalUSB_3_2_gen1?: string;
  InternalUSB_3_2_gen2?: string;
  mainPowerSocket?: string;
  CPUPowerSocket?: string;
  FanPowerConnectors?: string;
  ramType: string;
  interface: string;
  driveInterfaces: string | string[];
};

// collection RAM
export type RAM = Product & {
  colour: string;
  capacity: string;
  modules: string;
  formFactor: string;
  ramType: string;
  speed: string;
  clockSpeed: string;
  casLatency: string;
  timing: string;
  voltage: string;
  cooling: string;
  moduleProfile: string;
  moduleHeight: string;
};

// collection hardDrives
export type HardDrive = Product & {
  // placement: string;
  type: string;
  capacity: string;
  driveInterface: string;
  formFactor: string;
  cacheMemory: string;
  recordTechnology: string;
  RPM: string;
  material?: string;
  averageSearchTime?: string;
  plates?: string;
  dataTransferRate: string;
  operationPowerConsumption: string;
  standbyPowerConsumption: string;
  MTBF: string;
  size: string; // e.g. 147x102x20 mm
  weight: string;
};

// collection solidStateDrives
export type SolidStateDrive = Product & {
  placement: string;
  capacity: string;
  formFactor: string;
  m2Interface?: string;
  interface?: string;
  ssdInterface: string;
  controller: string;
  cacheMemory?: string;
  material?: string;
  memoryType: string;
  nVMe: string;
  writeSpeed: string;
  readSpeed: string;
  writeIOPS: string;
  readIOPS: string;
  TBW: string;
  MTBF: string;
  trim: boolean;
  size: string;
  weight: string;
};

// collection cases
export type Case = Product & {
  colour: string | undefined;
  target: string;
  mount: string;
  caseFormFactor?: string;
  formFactor: string;
  psuFormFactor: string;
  fanMaxHeight?: string;
  boardPlacement: string;
  psuMaxLength?: string;
  gpuMaxLength?: string;
  rubberFeet: boolean;
  integratedPSUPower?: string;
  dimensions?: string;
  psuMount: string;
  expansionSlots: string;
  openMechanism: string;
  fansTotal: string;
  fansInfo: Record<string, string>[];
  fansMountTotal: string;
  gridFrontPanel: boolean;
  dustFilter: boolean;
  liquidCoolingSupport: boolean;
  liquidCoolingMountsTotal: string;
  liquidPlacement: string;
  liquidCoolingInfo: Record<string, string>[];
  usb32Gen1: string;
  usb32Gen2: string;
  usbc32Gen2?: string;
  usb20: string;
  bays35?: string;
  internal25Compartments?: string;
  audioPort: boolean;
  material: string;
  weight: string;
  frontPanel: string;
};

// collection coolings
export type Cooling = Product & {
  target: string;
  type: string;
  fans: string;
  heatPipes: string;
  heatPipeContact: string;
  heatSinkMaterial: string;
  plateMaterial: string;
  mountType: string;
  socket: string[];
  fanSize: string;
  bearing: string;
  minRPM: string;
  maxRPM: string;
  speedController: string;
  maxAirFlow: string;
  maxTDP: string;
  airFlowDirection: string;
  replaceable: boolean;
  staticPressure: string;
  lighting?: boolean;
  lightingColour: string;
  powerSource: string;
  minNoiseLevel: string;
  noiseLevel: string;
  dimensions: string;
  height: string;
  weight: string;
};

// collection PSUs
export type PSU = Product & {
  power: number;
  psuFormFactor: string;
  PFC?: string;
  efficiency?: string;
  coolingSystem?: string;
  fanSize?: string;
  fanBearings?: string;
  certification?: string;
  atx12vVersion?: string;
  powerSupply?: string;
  SATA?: string;
  MOLEX?: string;
  PCIE8pin?: string;
  PCIE16pin?: string;
  cableSystem?: string;
  braidedWires?: boolean;
  mbCableLength?: string;
  cpuCableLength?: string;
  sataCableLength?: string;
  molexCableLength?: string;
  PCIECableLength?: string;
  dimensions?: string;
  weight?: string;
};

export type CategoryName = keyof typeof ProductCategories;

// Product builders
export type BuilderCategory =
  (typeof ProductCategories)[CategoryName]['builderTitle'];

export type CollectionName =
  (typeof ProductCategories)[CategoryName]['collectionName'];

export type Part =
  | CPU
  | GraphicsCard
  | Motherboard
  | RAM
  | HardDrive
  | SolidStateDrive
  | Case
  | Cooling
  | PSU;

export type FullProduct = Part & {
  stores: Store[];
};

export type Spec = {
  title: string;
  value: string | boolean | number | undefined;
};

export type SpecBlock = {
  name: string;
  specs: Spec[];
};

export type ProductCategory = {
  categoryName: CategoryName;
  builderTitle: BuilderCategory;
  collectionName: CollectionName;
};

export type ShortSpec = { name: string; value?: string };

export type Assembly = {
  CPU: CPU | null;
  GPU: GraphicsCard | null;
  PSU: PSU | null;
  RAM: RAM | null;
  case: Case | null;
  cooling: Cooling | null;
  motherboard: Motherboard | null;
  SSD: SolidStateDrive | null;
  HDD: HardDrive | null;
};

export type SelectedFilter = { [k: string]: string | string[] };

export type Builder = {
  categoryName: CategoryName;
  builderTitle: BuilderCategory;
  collectionName: CollectionName;
  filter: SelectedFilter;
};

export type Comparison = {
  CPU: CPU[];
  GPU: GraphicsCard[];
  PSU: PSU[];
  RAM: RAM[];
  case: Case[];
  cooling: Cooling[];
  motherboard: Motherboard[];
  SSD: SolidStateDrive[];
  HDD: HardDrive[];
};

export type CompatibleFilter = {
  CPU: Pick<CPU, 'socket' | 'ramType'> | null;
  GPU: Pick<GraphicsCard, 'interface' | 'power'> | null;
  PSU: Pick<PSU, 'power' | 'psuFormFactor'> | null;
  RAM: Pick<RAM, 'ramType'> | null;
  case: Pick<Case, 'formFactor' | 'psuFormFactor'> | null;
  cooling: Pick<Cooling, 'socket'> | null;
  motherboard: Pick<
    Motherboard,
    'socket' | 'formFactor' | 'driveInterfaces' | 'ramType' | 'interface'
  > | null;
  SSD: Pick<SolidStateDrive, 'ssdInterface'> | null;
  HDD: Pick<HardDrive, 'driveInterface'> | null;
};

export type CategorySpec = {
  title: string;
  values: (string | string[] | boolean | null | number)[];
};

export type PartType = {
  category: CategoryName;
  collection: CollectionName;
  id: string;
};

export type CreatedAssembly = {
  name: string;
  description: string;
  parts: PartType[];
  userId: string[];
  price: number;
};

export type AssemblyPartType = Part & {
  category: CategoryName;
};

export type FullAssembly = CreatedAssembly & { _id: string };

export type FilledAssembly = {
  _id: string;
  name: string;
  description: string;
  parts: AssemblyPartType[];
  userId: string[];
  price: number;
};
