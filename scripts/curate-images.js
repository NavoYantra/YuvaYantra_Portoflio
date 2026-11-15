const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = 'public/images/gallery';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Map key high-res images to semantic filenames
const curatedMapping = [
  {
    src: 'public/images/img/WhatsApp Image 2026-08-14 at 1.38.46 PM.jpeg',
    dest: 'public/images/gallery/school-computer-lab-wide.jpg',
    title: 'Modern Computer & Robotics Lab',
    category: 'Labs',
    caption: 'State-of-the-art computer & robotics lab setup in high school',
    aspect: 'wide'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.23.26 PM (1).jpeg',
    altSrc: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.47 PM/WhatsApp Image 2026-11-13 at 4.23.26 PM (1).jpeg',
    dest: 'public/images/gallery/stem-workshop-students.jpg',
    title: 'Student STEM Lab Workshop',
    category: 'Workshops',
    caption: 'Students assembling microcontroller circuits and motor drivers',
    aspect: 'wide'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.47 PM/WhatsApp Image 2026-11-13 at 4.23.27 PM (1).jpeg',
    dest: 'public/images/gallery/robotics-chassis-assembly.jpg',
    title: 'Robotics Chassis Assembly',
    category: 'Products',
    caption: 'Precision laser-cut robot chassis with dual motor gearboxes',
    aspect: 'wide'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.53 PM/WhatsApp Image 2026-11-13 at 4.30.41 PM.jpeg',
    dest: 'public/images/gallery/drone-tech-station.jpg',
    title: 'Drone Aviation Testing Arena',
    category: 'Labs',
    caption: 'Quadcopter calibration and optical telemetry inspection bench',
    aspect: 'wide'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.53 PM/WhatsApp Image 2026-11-13 at 4.30.40 PM (1).jpeg',
    dest: 'public/images/gallery/robotic-arm-precision.jpg',
    title: 'Multi-Axis Articulated Arm',
    category: 'Products',
    caption: 'Industrial 4-DOF robotic arm for college and automation training',
    aspect: 'tall'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.53 PM/WhatsApp Image 2026-11-13 at 4.30.41 PM (1).jpeg',
    dest: 'public/images/gallery/sumo-battle-bot-action.jpg',
    title: 'Sumo Robot Combat Platform',
    category: 'Products',
    caption: 'Tough acrylic combat chassis with high-torque rubber traction wheels',
    aspect: 'tall'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.47 PM/WhatsApp Image 2026-11-13 at 4.23.25 PM.jpeg',
    dest: 'public/images/gallery/esp32-vision-car-top.jpg',
    title: 'AI Smart Vision Robot Car',
    category: 'Products',
    caption: 'ESP32-CAM module mounted on multi-directional autonomous chassis',
    aspect: 'tall'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.11.30 PM/WhatsApp Image 2026-11-13 at 4.01.55 PM.jpeg',
    dest: 'public/images/gallery/electronics-bench-testing.jpg',
    title: 'Electronics & Sensor Workbench',
    category: 'Labs',
    caption: 'Sensors, breadboards and digital multimeters ready for practicals',
    aspect: 'wide'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.11.30 PM/WhatsApp Image 2026-11-13 at 4.01.56 PM (2).jpeg',
    dest: 'public/images/gallery/faculty-training-session.jpg',
    title: 'Teacher Empowerment Programme',
    category: 'Teacher Training',
    caption: 'Teachers mastering block coding and robotics curriculum delivery',
    aspect: 'wide'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.11.30 PM/WhatsApp Image 2026-11-13 at 4.01.58 PM (1).jpeg',
    dest: 'public/images/gallery/drone-outdoor-calibration.jpg',
    title: 'Outdoor Drone Flight Testing',
    category: 'Events',
    caption: 'Field testing autonomous waypoint navigation and safety geofencing',
    aspect: 'wide'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.30 PM/WhatsApp Image 2026-11-13 at 4.18.27 PM (1).jpeg',
    dest: 'public/images/gallery/custom-pcb-testing.jpg',
    title: 'Custom Printed Circuit Board R&D',
    category: 'Products',
    caption: 'Multi-layer SMT assembled PCB with microcontroller integration',
    aspect: 'square'
  },
  {
    src: 'public/images/img/WhatsApp Unknown 2026-11-13 at 4.30.30 PM/WhatsApp Image 2026-11-13 at 4.18.28 PM.jpeg',
    dest: 'public/images/gallery/robotics-competition-lineup.jpg',
    title: 'Battle Robots Arena Lineup',
    category: 'Events',
    caption: 'Custom-designed competition rovers ready for inter-school robotics tournament',
    aspect: 'wide'
  }
];

function findFile(relPath) {
  if (fs.existsSync(relPath)) return relPath;
  const filename = path.basename(relPath);
  function search(dir) {
    const list = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of list) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const found = search(full);
        if (found) return found;
      } else if (entry.name === filename) {
        return full;
      }
    }
    return null;
  }
  return search('public/images/img');
}

const copiedItems = [];

for (const item of curatedMapping) {
  const actualSrc = findFile(item.src) || (item.altSrc && findFile(item.altSrc));
  if (actualSrc) {
    fs.copyFileSync(actualSrc, item.dest);
    console.log(`Copied: ${path.basename(actualSrc)} -> ${item.dest}`);
    copiedItems.push({
      ...item,
      image: '/' + item.dest.replace(/^public\//, '').replace(/\\/g, '/')
    });
  } else {
    console.log(`File not found: ${item.src}`);
  }
}

fs.writeFileSync('scripts/curated-gallery.json', JSON.stringify(copiedItems, null, 2));
console.log(`Successfully curated ${copiedItems.length} images!`);
