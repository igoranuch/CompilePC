/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
import {
  CPU,
  Case,
  CategoryName,
  Cooling,
  GraphicsCard,
  HardDrive,
  Motherboard,
  PSU,
  Part,
  RAM,
  SolidStateDrive,
} from '../../types';

const getCategorySpecs = (category: CategoryName, parts: Part[]) => {
  switch (category) {
    case 'CPU':
      const CPUs = parts as CPU[];

      return [
        {
          title: 'Series',
          values: CPUs.map((cpu) => cpu.series),
        },
        {
          title: 'Socket',
          values: CPUs.map((cpu) => cpu.socket),
        },
        {
          title: 'Lithography',
          values: CPUs.map((cpu) => cpu.lithography),
        },
        {
          title: 'Cores',
          values: CPUs.map((cpu) => cpu.cores),
        },
        {
          title: 'Threads',
          values: CPUs.map((cpu) => cpu.threads),
        },
        {
          title: 'Clock speed',
          values: CPUs.map((cpu) => cpu.clockSpeed),
        },
        {
          title: 'Turbo boost',
          values: CPUs.map((cpu) => cpu.turboBoost),
        },
        {
          title: 'L1 cache',
          values: CPUs.map((cpu) => cpu.l1Cache),
        },
        {
          title: 'L2 cache',
          values: CPUs.map((cpu) => cpu.l2Cache),
        },
        {
          title: 'L3 cache',
          values: CPUs.map((cpu) => cpu.l3Cache),
        },
        {
          title: 'IGP Model',
          values: CPUs.map((cpu) => cpu.IGP),
        },
        {
          title: 'TDP',
          values: CPUs.map((cpu) => cpu.TDP),
        },
        {
          title: 'PCI Express support',
          values: CPUs.map((cpu) => cpu.PCIExpress),
        },
        {
          title: 'Max. operating temperature',
          values: CPUs.map((cpu) => cpu.maxOperatingTemperature),
        },
        {
          title: 'Max. clock speed of DDR3',
          values: CPUs.map((cpu) => cpu.maxDDR3Speed),
        },
        {
          title: 'Max. clock speed of DDR4',
          values: CPUs.map((cpu) => cpu.maxDDR4Speed),
        },
        {
          title: 'Max. clock speed of DDR5',
          values: CPUs.map((cpu) => cpu.maxDDR5Speed),
        },
        {
          title: 'Number of channels',
          values: CPUs.map((cpu) => cpu.channels),
        },
        {
          title: 'Ram type',
          values: CPUs.map((cpu) => cpu.ramType),
        },
      ];
    case 'GPU':
      const GPUs = parts as GraphicsCard[];

      return [
        {
          title: 'Interface',
          values: GPUs.map((gpu) => gpu.interface),
        },
        {
          title: 'GPU model',
          values: GPUs.map((gpu) => gpu.GPUModel),
        },
        {
          title: 'Architecture',
          values: GPUs.map((gpu) => gpu.architecture),
        },
        {
          title: 'Memory size',
          values: GPUs.map((gpu) => gpu.memorySize),
        },
        {
          title: 'Memory type',
          values: GPUs.map((gpu) => gpu.memoryType),
        },
        {
          title: 'Memory bus',
          values: GPUs.map((gpu) => gpu.memoryBus),
        },
        {
          title: 'GPU clock speed',
          values: GPUs.map((gpu) => gpu.GPUClockSpeed),
        },
        {
          title: 'Lithography',
          values: GPUs.map((gpu) => gpu.lithography),
        },
        {
          title: 'Max. resolution',
          values: GPUs.map((gpu) => gpu.maxResolution),
        },
        {
          title: 'HDMI',
          values: GPUs.map((gpu) => gpu.HDMI),
        },
        {
          title: 'HDMI version',
          values: GPUs.map((gpu) => gpu.HDMIVersion),
        },
        {
          title: 'DisplayPort',
          values: GPUs.map((gpu) => gpu.displayPort),
        },
        {
          title: 'DisplayPort version',
          values: GPUs.map((gpu) => gpu.displayPortVersion),
        },
        {
          title: 'DirectX',
          values: GPUs.map((gpu) => gpu.directX),
        },
        {
          title: 'OpenGL',
          values: GPUs.map((gpu) => gpu.openGL),
        },
        {
          title: 'VR',
          values: GPUs.map((gpu) => gpu.isVRReady),
        },
        {
          title: 'Stream processors',
          values: GPUs.map((gpu) => gpu.streamProcessors),
        },
        {
          title: 'Texture units',
          values: GPUs.map((gpu) => gpu.textureUnits),
        },
        {
          title: 'Monitors connection',
          values: GPUs.map((gpu) => gpu.monitorsConnection),
        },
        {
          title: 'Cooling',
          values: GPUs.map((gpu) => gpu.cooling),
        },
        {
          title: 'Fans',
          values: GPUs.map((gpu) => gpu.fans),
        },
        {
          title: 'Minimum PSU recommendation',
          values: GPUs.map((gpu) => `${gpu.power} W`),
        },
        {
          title: 'Additional power',
          values: GPUs.map((gpu) => gpu.additionalPower),
        },
        {
          title: 'Number of slots',
          values: GPUs.map((gpu) => gpu.numberOfSlots),
        },
        {
          title: 'Length',
          values: GPUs.map((gpu) => gpu.size),
        },
      ];
    case 'motherboard':
      const MBs = parts as Motherboard[];

      return [
        {
          title: 'Socket',
          values: MBs.map((mb) => mb.socket),
        },
        {
          title: 'Form Factor',
          values: MBs.map((mb) => mb.formFactor),
        },
        {
          title: 'Power phases',
          values: MBs.map((mb) => mb.powerPhases),
        },
        {
          title: 'VRM heatsink',
          values: MBs.map((mb) => mb.VRMHeatsink),
        },
        {
          title: 'Size (HxW)',
          values: MBs.map((mb) => mb.size),
        },
        {
          title: 'Chipset',
          values: MBs.map((mb) => mb.chipset),
        },
        {
          title: 'BIOS',
          values: MBs.map((mb) => mb.BIOS),
        },
        {
          title: 'Ram type',
          values: MBs.map((mb) => mb.ramType),
        },
        {
          title: 'Memory module',
          values: MBs.map((mb) => mb.memoryModule),
        },
        {
          title: 'Operation module',
          values: MBs.map((mb) => mb.operationMode),
        },
        {
          title: 'Max. clock frequency',
          values: MBs.map((mb) => mb.maxClockFrequency),
        },
        {
          title: 'Max. memory',
          values: MBs.map((mb) => mb.maxMemory),
        },
        {
          title: 'VGA',
          values: MBs.map((mb) => mb.VGA),
        },
        {
          title: 'HDMI output',
          values: MBs.map((mb) => mb.HDMI),
        },
        {
          title: 'HDMI version',
          values: MBs.map((mb) => mb.HDMIVersion),
        },
        {
          title: 'Display Port',
          values: MBs.map((mb) => mb.displayPort),
        },
        {
          title: 'Display Port version',
          values: MBs.map((mb) => mb.displayPortVersion),
        },
        {
          title: 'Audiochip',
          values: MBs.map((mb) => mb.audiochip),
        },
        {
          title: 'Sound (channels)',
          values: MBs.map((mb) => mb.sound),
        },
        {
          title: 'SATA 3',
          values: MBs.map((mb) => mb.sata3),
        },
        {
          title: 'M.2 connector',
          values: MBs.map((mb) => mb.m2connector),
        },
        {
          title: 'M.2',
          values: MBs.map((mb) => mb.m2),
        },
        {
          title: 'LAN (RJ-45)',
          values: MBs.map((mb) => mb.lanRJ45),
        },
        {
          title: 'LAN ports',
          values: MBs.map((mb) => mb.lanPorts),
        },
        {
          title: 'LAN controller',
          values: MBs.map((mb) => mb.lanController),
        },
        {
          title: 'PCI-E 1x slots',
          values: MBs.map((mb) => mb.PCI_E_1x),
        },
        {
          title: 'PCI-E 16x slots',
          values: MBs.map((mb) => mb.PCI_E_16x),
        },
        {
          title: 'PCI Express version',
          values: MBs.map((mb) => mb.PCIExpressVerison),
        },
        {
          title: 'USB 2.0',
          values: MBs.map((mb) => mb.ExternalUSB_2_0),
        },
        {
          title: 'USB 3.2 gen1',
          values: MBs.map((mb) => mb.ExternalUSB_3_2_gen1),
        },
        {
          title: 'USB 3.2 gen2',
          values: MBs.map((mb) => mb.ExternalUSB_3_2_gen2),
        },
        {
          title: 'USB 2.0',
          values: MBs.map((mb) => mb.InternalUSB_2_0),
        },
        {
          title: 'USB 3.2 gen1',
          values: MBs.map((mb) => mb.InternalUSB_3_2_gen1),
        },
        {
          title: 'USB 3.2 gen2',
          values: MBs.map((mb) => mb.InternalUSB_3_2_gen2),
        },
        {
          title: 'Main power socket',
          values: MBs.map((mb) => mb.mainPowerSocket),
        },
        {
          title: 'CPU power',
          values: MBs.map((mb) => mb.CPUPowerSocket),
        },
        {
          title: 'Fan power connectors',
          values: MBs.map((mb) => mb.FanPowerConnectors),
        },
      ];
    case 'RAM':
      const RAMs = parts as RAM[];

      return [
        {
          title: 'Color',
          values: RAMs.map((ram) => ram.colour),
        },
        {
          title: 'Memory capacity',
          values: RAMs.map((ram) => ram.capacity),
        },
        {
          title: 'Memory modules',
          values: RAMs.map((ram) => ram.modules),
        },
        {
          title: 'Form factor',
          values: RAMs.map((ram) => ram.formFactor),
        },
        {
          title: 'Type',
          values: RAMs.map((ram) => ram.ramType),
        },
        {
          title: 'Memory speed',
          values: RAMs.map((ram) => ram.speed),
        },
        {
          title: 'Clock speed',
          values: RAMs.map((ram) => ram.clockSpeed),
        },
        {
          title: 'CAS Latency',
          values: RAMs.map((ram) => ram.casLatency),
        },
        {
          title: 'Memory timing',
          values: RAMs.map((ram) => ram.timing),
        },
        {
          title: 'Voltage',
          values: RAMs.map((ram) => ram.voltage),
        },
        {
          title: 'Cooling',
          values: RAMs.map((ram) => ram.cooling),
        },
        {
          title: 'Module profile',
          values: RAMs.map((ram) => ram.moduleProfile),
        },
        {
          title: 'Module height',
          values: RAMs.map((ram) => ram.moduleHeight),
        },
      ];
    case 'HDD':
      const HDDs = parts as HardDrive[];

      return [
        {
          title: 'Type',
          values: HDDs.map((hdd) => hdd.type),
        },
        {
          title: 'Capacity',
          values: HDDs.map((hdd) => hdd.capacity),
        },
        {
          title: 'Form factor',
          values: HDDs.map((hdd) => hdd.formFactor),
        },
        {
          title: 'Interface',
          values: HDDs.map((hdd) => hdd.driveInterface),
        },
        {
          title: 'Cache memory',
          values: HDDs.map((hdd) => hdd.cacheMemory),
        },
        {
          title: 'Record technology',
          values: HDDs.map((hdd) => hdd.recordTechnology),
        },
        {
          title: 'RPM',
          values: HDDs.map((hdd) => hdd.RPM),
        },
        {
          title: 'Data transfer rate',
          values: HDDs.map((hdd) => hdd.dataTransferRate),
        },
        {
          title: 'Operation power consumption',
          values: HDDs.map((hdd) => hdd.operationPowerConsumption),
        },
        {
          title: 'Standby power consumption',
          values: HDDs.map((hdd) => hdd.standbyPowerConsumption),
        },
        {
          title: 'MTBF',
          values: HDDs.map((hdd) => hdd.MTBF),
        },
        {
          title: 'Size',
          values: HDDs.map((hdd) => hdd.size),
        },
        {
          title: 'Weight',
          values: HDDs.map((hdd) => hdd.weight),
        },
      ];
    case 'SSD':
      const SSDs = parts as SolidStateDrive[];

      return [
        {
          title: 'Placement',
          values: SSDs.map((ssd) => ssd.placement),
        },
        {
          title: 'Capacity',
          values: SSDs.map((ssd) => ssd.capacity),
        },
        {
          title: 'Form factor',
          values: SSDs.map((ssd) => ssd.formFactor),
        },
        {
          title: 'M.2 interface',
          values: SSDs.map((ssd) => ssd.m2Interface),
        },
        {
          title: 'Controller',
          values: SSDs.map((ssd) => ssd.controller),
        },
        {
          title: 'Cache memory',
          values: SSDs.map((ssd) => ssd.cacheMemory),
        },
        {
          title: 'Memory type',
          values: SSDs.map((ssd) => ssd.memoryType),
        },
        {
          title: 'NVMe',
          values: SSDs.map((ssd) => ssd.nVMe),
        },
        {
          title: 'Write speed',
          values: SSDs.map((ssd) => ssd.writeSpeed),
        },
        {
          title: 'Read speed',
          values: SSDs.map((ssd) => ssd.readSpeed),
        },
        {
          title: 'MTBF',
          values: SSDs.map((ssd) => ssd.MTBF),
        },
        {
          title: 'Write IOPS',
          values: SSDs.map((ssd) => ssd.writeIOPS),
        },
        {
          title: 'Read IOPS',
          values: SSDs.map((ssd) => ssd.readIOPS),
        },
        {
          title: 'TBW',
          values: SSDs.map((ssd) => ssd.TBW),
        },
        {
          title: 'TRIM',
          values: SSDs.map((ssd) => ssd.trim),
        },
        {
          title: 'Size',
          values: SSDs.map((ssd) => ssd.size),
        },
        {
          title: 'Weight',
          values: SSDs.map((ssd) => ssd.weight),
        },
      ];
    case 'case':
      const Cases = parts as Case[];

      return [
        {
          title: 'Color',
          values: Cases.map((cs) => cs.colour),
        },
        {
          title: 'Features',
          values: Cases.map((cs) => cs.target),
        },
        {
          title: 'Form factor',
          values: Cases.map((cs) => cs.caseFormFactor),
        },
        {
          title: 'Motherboard form factor',
          values: Cases.map((cs) => cs.formFactor),
        },
        {
          title: 'Board placement',
          values: Cases.map((cs) => cs.boardPlacement),
        },
        {
          title: 'PSU form factor',
          values: Cases.map((cs) => cs.psuFormFactor),
        },
        {
          title: 'Mount',
          values: Cases.map((cs) => cs.mount),
        },
        {
          title: 'Dimensions (HxWxD)',
          values: Cases.map((cs) => cs.dimensions),
        },
        {
          title: 'Graphics card max lenght',
          values: Cases.map((cs) => cs.gpuMaxLength),
        },
        {
          title: 'Fan max height',
          values: Cases.map((cs) => cs.fanMaxHeight),
        },
        {
          title: 'Weight',
          values: Cases.map((cs) => cs.weight),
        },
        {
          title: 'Material',
          values: Cases.map((cs) => cs.material),
        },
        {
          title: 'Rubber feet',
          values: Cases.map((cs) => cs.rubberFeet),
        },
        { title: 'PSU Mount', values: Cases.map((cs) => cs.psuMount) },
        { title: '3.5" bays', values: Cases.map((cs) => cs.bays35) },
        {
          title: 'Internal 2.5" compartments',
          values: Cases.map((cs) => cs.internal25Compartments),
        },
        {
          title: 'Expansion slots',
          values: Cases.map((cs) => cs.expansionSlots),
        },
        {
          title: 'Open mechanism',
          values: Cases.map((cs) => cs.openMechanism),
        },
        { title: 'Fans total', values: Cases.map((cs) => cs.fansTotal) },
        {
          title: 'Fan mounts total',
          values: Cases.map((cs) => cs.fansMountTotal),
        },
        {
          title: 'Grid front panel',
          values: Cases.map((cs) => cs.gridFrontPanel),
        },
        { title: 'Dust filter', values: Cases.map((cs) => cs.dustFilter) },
        {
          title: 'Liquid cooling support',
          values: Cases.map((cs) => cs.liquidCoolingSupport),
        },
        {
          title: 'Fans total',
          values: Cases.map((cs) => cs.liquidCoolingMountsTotal),
        },
        { title: 'Placement', values: Cases.map((cs) => cs.liquidPlacement) },
        { title: 'USB 2.0', values: Cases.map((cs) => cs.usb20) },
        { title: 'USB 3.2 gen1', values: Cases.map((cs) => cs.usb32Gen1) },
        { title: 'USB 3.2 gen2', values: Cases.map((cs) => cs.usb32Gen2) },
        { title: 'USB C 3.2 gen2', values: Cases.map((cs) => cs.usbc32Gen2) },
        {
          title: 'Audio (microphone/headphones)',
          values: Cases.map((cs) => cs.audioPort),
        },
        { title: 'Front panel', values: Cases.map((cs) => cs.frontPanel) },
        { title: 'Weight', values: Cases.map((cs) => cs.weight) },
      ];
    case 'cooling':
      const Coolings = parts as Cooling[];

      return [
        {
          title: 'Features',
          values: Coolings.map((cooling) => cooling.target),
        },
        {
          title: 'Type',
          values: Coolings.map((cooling) => cooling.type),
        },
        {
          title: 'Heat pipes',
          values: Coolings.map((cooling) => cooling.heatPipes),
        },
        {
          title: 'Heatpipe contact',
          values: Coolings.map((cooling) => cooling.heatPipeContact),
        },
        {
          title: 'Heatpipe material',
          values: Coolings.map((cooling) => cooling.heatSinkMaterial),
        },
        {
          title: 'Plate material',
          values: Coolings.map((cooling) => cooling.plateMaterial),
        },
        {
          title: 'Socket',
          values: Coolings.map((cooling) => cooling.socket),
        },
        {
          title: 'Number of fans',
          values: Coolings.map((cooling) => cooling.fans),
        },
        {
          title: 'Fan size',
          values: Coolings.map((cooling) => cooling.fanSize),
        },
        {
          title: 'Bearing',
          values: Coolings.map((cooling) => cooling.bearing),
        },
        {
          title: 'Min. RPM',
          values: Coolings.map((cooling) => cooling.minRPM),
        },
        {
          title: 'Max. RPM',
          values: Coolings.map((cooling) => cooling.maxRPM),
        },
        {
          title: 'Speed controller',
          values: Coolings.map((cooling) => cooling.speedController),
        },
        {
          title: 'Max. air flow',
          values: Coolings.map((cooling) => cooling.maxAirFlow),
        },
        {
          title: 'Static pressure',
          values: Coolings.map((cooling) => cooling.staticPressure),
        },
        {
          title: 'Max. TDP',
          values: Coolings.map((cooling) => cooling.maxTDP),
        },
        {
          title: 'Air flow direction',
          values: Coolings.map((cooling) => cooling.airFlowDirection),
        },
        {
          title: 'Replaceable',
          values: Coolings.map((cooling) => cooling.replaceable),
        },
        {
          title: 'Power source',
          values: Coolings.map((cooling) => cooling.powerSource),
        },
        {
          title: 'Min noise level',
          values: Coolings.map((cooling) => cooling.minNoiseLevel),
        },
        {
          title: 'Noise level',
          values: Coolings.map((cooling) => cooling.noiseLevel),
        },
        {
          title: 'Mount type',
          values: Coolings.map((cooling) => cooling.mountType),
        },
        {
          title: 'Dimensions',
          values: Coolings.map((cooling) => cooling.dimensions),
        },
        {
          title: 'Height',
          values: Coolings.map((cooling) => cooling.height),
        },
        {
          title: 'Weight',
          values: Coolings.map((cooling) => cooling.weight),
        },
      ];
    case 'PSU':
      const PSUs = parts as PSU[];

      return [
        {
          title: 'Power',
          values: PSUs.map((psu) => `${psu.power} W`),
        },
        {
          title: 'Form factor',
          values: PSUs.map((psu) => psu.psuFormFactor),
        },
        {
          title: 'PFC Type',
          values: PSUs.map((psu) => psu.PFC),
        },
        {
          title: 'Effiency',
          values: PSUs.map((psu) => psu.efficiency),
        },
        {
          title: 'Cooling system',
          values: PSUs.map((psu) => psu.coolingSystem),
        },
        {
          title: 'Fan size',
          values: PSUs.map((psu) => psu.fanSize),
        },
        {
          title: 'Fan bearings',
          values: PSUs.map((psu) => psu.fanBearings),
        },
        {
          title: 'Certification',
          values: PSUs.map((psu) => psu.certification),
        },
        {
          title: 'ATX 12V v. Standard',
          values: PSUs.map((psu) => psu.atx12vVersion),
        },
        {
          title: 'Power supply',
          values: PSUs.map((psu) => psu.powerSupply),
        },
        {
          title: 'SATA',
          values: PSUs.map((psu) => psu.SATA),
        },
        {
          title: 'MOLEX',
          values: PSUs.map((psu) => psu.MOLEX),
        },
        {
          title: 'PCI-E 8pin',
          values: PSUs.map((psu) => psu.PCIE8pin),
        },
        {
          title: 'Cable system',
          values: PSUs.map((psu) => psu.cableSystem),
        },
        {
          title: 'Braided wires',
          values: PSUs.map((psu) => psu.braidedWires),
        },
        {
          title: 'SATA cable length',
          values: PSUs.map((psu) => psu.sataCableLength),
        },
        {
          title: 'MOLEX cable length',
          values: PSUs.map((psu) => psu.molexCableLength),
        },
        {
          title: 'PCIE cable length',
          values: PSUs.map((psu) => psu.PCIECableLength),
        },
        {
          title: 'CPU cable length',
          values: PSUs.map((psu) => psu.cpuCableLength),
        },
        {
          title: 'MB cable length',
          values: PSUs.map((psu) => psu.mbCableLength),
        },
        {
          title: 'Dimensions (HxWxD)',
          values: PSUs.map((psu) => psu.dimensions),
        },
        {
          title: 'Weight',
          values: PSUs.map((psu) => psu.weight),
        },
      ];
  }
};

export default getCategorySpecs;
