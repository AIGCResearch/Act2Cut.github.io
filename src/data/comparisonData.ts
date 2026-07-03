export interface ComparisonMethod {
  key: string;
  label: string;
  isOurs: boolean;
}

export interface ComparisonItem {
  id: string;
  movie: string;
  group: string;
  numShots: number;
  shots: string[];
  setting: string;
  action: string;
  fullPrompts: string[];
  globalCaption: string;
  caseNumber: number;
  videos: Record<string, string | null>;
}

export const comparisonMethods: ComparisonMethod[] = [
  {
    "key": "holocine14b",
    "label": "HoloCine-14B",
    "isOurs": false
  },
  {
    "key": "msm_1_3b",
    "label": "MSM-1.3B",
    "isOurs": false
  },
  {
    "key": "msm_14b",
    "label": "MSM-14B",
    "isOurs": false
  },
  {
    "key": "kling3",
    "label": "Kling3",
    "isOurs": false
  },
  {
    "key": "sora2",
    "label": "Sora 2",
    "isOurs": false
  },
  {
    "key": "happyhorse1",
    "label": "HappyHorse-1",
    "isOurs": false
  },
  {
    "key": "seedance2",
    "label": "Seedance-2",
    "isOurs": false
  },
  {
    "key": "cinetrans",
    "label": "CineTrans",
    "isOurs": false
  },
  {
    "key": "wan2_2_ti2v_5b",
    "label": "Wan2.2-TI2V-5B",
    "isOurs": false
  },
  {
    "key": "act2cut",
    "label": "★ Act2Cut (Ours)",
    "isOurs": true
  }
];

export const comparisonItems: ComparisonItem[] = [
  {
    "id": "Your_name_group_0009",
    "movie": "Your name",
    "group": "#0009",
    "numShots": 2,
    "shots": [
      "shot 1",
      "shot 2"
    ],
    "setting": "Daytime, well-lit indoor environment with bright natural light illuminating the comfortable room",
    "action": "C1 reaches out her hand to pick up the grey remote control from the wooden table, then holds it up in front of her and presses a button. C2 sits comfortably at the…",
    "fullPrompts": [
      "This is a Close-Up (CU) of C1 's hand and the remote control., framed as a Insert Shot, from a Direct View, with a Level Angle, and with Shallow Depth-of-Field, with the camera Static (No Movement), with No Zoom, with Tilt Up, with Static Tripod, with Fixed Focus, and at Standard Frame Rate.",
      "This is a Medium Shot (MS) of C1 , C2 , and C3 ., framed as a Three Shot, from a Direct View, with a Level Angle, and with Deep Depth-of-Field, with the camera Push(Dolly) In, with No Zoom, with No Rotation, with Stable/Steadicam, with Fixed Focus, and at Standard Frame Rate."
    ],
    "globalCaption": "Daytime, well-lit indoor environment with bright natural light illuminating the comfortable room. A traditional Japanese-style room featuring a wooden dining table, a rice cooker, and sliding doors. 2D anime style with vibrant colors, soft lighting, and highly detailed background artwork. C1 is A teenage girl with dark hair wearing a white school shirt and a red bow. C2 is A younger girl with dark pigtails, dressed in a bright yellow hoodie. C3 is An older woman with grey hair and glasses, wearing a green traditional top. C1 reaches out her hand to pick up the grey remote control from the wooden table, then holds it up in front of her and presses a button. C2 sits comfortably at the wooden dining table, continuously using her chopsticks to eat food from a bowl. C3 remains seated quietly in the background behind the table, observing the room while looking steadily towards the right. This scene contains 2 shots. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent.",
    "caseNumber": 1,
    "videos": {
      "holocine14b": "qualitative_comparison/HoloCine14b/Your_Name/group_0009/group_0009.mp4",
      "msm_1_3b": "qualitative_comparison/MSM-1.3b/Your_Name/group_0009/group_0009.mp4",
      "msm_14b": "qualitative_comparison/MSM-14b/Your_Name/group_0009/group_0009.mp4",
      "kling3": "qualitative_comparison/Kling3/Your_name/group_0009/group_0009.mp4",
      "sora2": "qualitative_comparison/Sora2/Your_name/group_0009/group_0009.mp4",
      "act2cut": "qualitative_comparison/Act2Cut/Your_Name/group_0009/group_0009.mp4",
      "happyhorse1": "qualitative_comparison/Happyhorse1/Your_Name/group_0009/group_0009.mp4",
      "seedance2": "qualitative_comparison/Seedance2/Your_name/group_0009/group_0009.mp4",
      "cinetrans": "qualitative_comparison/CineTrans/Your_Name/group_0009/group_0009.mp4",
      "wan2_2_ti2v_5b": "qualitative_comparison/Wan2.2-TI2V-5B/Your_Name/group_0009/group_0009.mp4"
    }
  },
  {
    "id": "Harry_Potter_The_Chamber_of_Secrets_group_0014",
    "movie": "Harry Potter The Chamber of Secrets",
    "group": "#0014",
    "numShots": 3,
    "shots": [
      "medium shot",
      "medium shot",
      "long/wide shot"
    ],
    "setting": "Nighttime outdoors with artificial house lighting illuminating the surroundings",
    "action": "C1 sits at the steering wheel, issues a vocal command, and holds on as the vehicle abruptly accelerates and ascends. The flying blue car accelerates, ripping iron bars…",
    "fullPrompts": [
      "Shot1 is a medium shot focused on the action of C1 and C2 in the car as they pull the bars off the window. It uses wide-angle lensing, high-angle right-three-quarter-front-view right-canted camera angle, direct-view two-character framing, and deep depth of field. The camera follows the action, pans left, and uses handheld stability.",
      "Shot2 is a medium shot focused on the blue car hovering in the air with C1 and C2 visible through the windshield. It uses normal, eye-level right-three-quarter-front-view camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
      "Shot3 is a long/wide shot focused on the flying blue car containing C1 and C2 hovering between the brick houses. It uses wide-angle lensing, high-angle left-three-quarter-front-view camera angle, direct-view single-subject framing, and deep depth of field. The camera uses locked-off tripod stability."
    ],
    "globalCaption": "Nighttime outdoors with artificial house lighting illuminating the surroundings. A brick house with barred windows and a backyard. Live-action fantasy film with dark, dramatic nighttime lighting. C1 is A young ginger-haired boy wearing a collared shirt and jacket. C1 sits at the steering wheel, issues a vocal command, and holds on as the vehicle abruptly accelerates and ascends. The flying blue car accelerates, ripping iron bars off the window, then launches into the air, hovering and ascending. This scene contains 3 shots. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent.",
    "caseNumber": 2,
    "videos": {
      "holocine14b": "qualitative_comparison/HoloCine14b/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "msm_1_3b": "qualitative_comparison/MSM-1.3b/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "msm_14b": "qualitative_comparison/MSM-14b/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "kling3": "qualitative_comparison/Kling3/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "sora2": "qualitative_comparison/Sora2/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "act2cut": "qualitative_comparison/Act2Cut/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "happyhorse1": "qualitative_comparison/Happyhorse1/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "seedance2": "qualitative_comparison/Seedance2/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "cinetrans": "qualitative_comparison/CineTrans/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4",
      "wan2_2_ti2v_5b": "qualitative_comparison/Wan2.2-TI2V-5B/Harry_Potter_The_Chamber_of_Secrets/group_0014/group_0014.mp4"
    }
  },
  {
    "id": "Good_Will_Hunting_group_0038",
    "movie": "Good Will Hunting",
    "group": "#0038",
    "numShots": 2,
    "shots": [
      "medium close-up",
      "medium close-up"
    ],
    "setting": "A dimly lit indoor space, likely a bar, with a relaxed, casual atmosphere",
    "action": "C1 speaks to his companion across the table, maintaining steady eye contact with a gentle expression and slightly tilting his head as he delivers his dialogue. C2 looks…",
    "fullPrompts": [
      "Shot1 is a medium close-up focused on C1 's face. It uses short-telephoto compression, eye-level front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pushes in, and uses stabilized Steadicam-style movement.",
      "Shot2 is a medium close-up focused on C2 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability."
    ],
    "globalCaption": "A dimly lit indoor space, likely a bar, with a relaxed, casual atmosphere. A wooden table in the foreground, with a pool table in the blurred background. Live-action film with naturalistic lighting, slightly muted colors, and a shallow depth of field. C1 is A middle-aged man with a full beard, wearing a blue, short-sleeved plaid shirt. C2 is A blond man wearing a black and white plaid jacket and a striped shirt. C3 is A waiter, visible only by their arms and hands holding serving plates. C1 speaks to his companion across the table, maintaining steady eye contact with a gentle expression and slightly tilting his head as he delivers his dialogue. C2 looks downward at the table thoughtfully, then slowly raises his left hand to gently rub his forehead while verbally thanking the waiter for bringing the meal. C3 moves a plate of food across the foreground, continuing the serving motion seamlessly to place the plates down on the table in front of the seated men. Plates filled with sandwiches and fries are carried steadily across the space and placed down. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent.",
    "caseNumber": 3,
    "videos": {
      "holocine14b": "qualitative_comparison/HoloCine14b/Good_Will_Hunting/group_0038/group_0038.mp4",
      "msm_1_3b": "qualitative_comparison/MSM-1.3b/Good_Will_Hunting/group_0038/group_0038.mp4",
      "msm_14b": "qualitative_comparison/MSM-14b/Good_Will_Hunting/group_0038/group_0038.mp4",
      "kling3": "qualitative_comparison/Kling3/Good_Will_Hunting/group_0038/group_0038.mp4",
      "sora2": "qualitative_comparison/Sora2/Good_Will_Hunting/group_0038/group_0038.mp4",
      "act2cut": "qualitative_comparison/Act2Cut/Good_Will_Hunting/group_0038/group_0038.mp4",
      "happyhorse1": "qualitative_comparison/Happyhorse1/Good_Will_Hunting/group_0038/group_0038.mp4",
      "seedance2": "qualitative_comparison/Seedance2/Good_Will_Hunting/group_0038/group_0038.mp4",
      "cinetrans": "qualitative_comparison/CineTrans/Good_Will_Hunting/group_0038/group_0038.mp4",
      "wan2_2_ti2v_5b": "qualitative_comparison/Wan2.2-TI2V-5B/Good_Will_Hunting/group_0038/group_0038.mp4"
    }
  },
  {
    "id": "Your_name_group_0014",
    "movie": "Your name",
    "group": "#0014",
    "numShots": 3,
    "shots": [
      "close-up",
      "medium shot",
      "medium close-up"
    ],
    "setting": "Warm, indoor lighting, creating a relaxed and intimate atmosphere for a traditional meal",
    "action": "C1 he pours sake from a white bottle into a small cup for C2 , then lowers the bottle and speaks with a slight smile while looking at his companion. C2 he holds up a…",
    "fullPrompts": [
      "Shot1 is a close-up focused on the hands pouring liquid from a flask into a small cup. It uses normal-standard lensing, high-angle front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "Shot2 is a medium shot focused on C1 's hand pouring a drink into C2 's cup. It uses normal-standard lensing, eye-level camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
      "Shot3 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses locked-off tripod stability."
    ],
    "globalCaption": "Warm, indoor lighting, creating a relaxed and intimate atmosphere for a traditional meal. A traditional Japanese dining room featuring a long table laden with sushi, dishes, and drinks. 2D anime style with warm color grading, detailed food illustrations, and realistic character designs. C1 is An older man with grey hair, wearing a dark suit and a yellow tie. C2 is An older, balding man wearing a blue jacket over a collared shirt and red tie. C1 he pours sake from a white bottle into a small cup for C2 , then lowers the bottle and speaks with a slight smile while looking at his companion. C2 he holds up a small cup with both hands to receive the poured sake, shows a surprised expression, and then takes a respectful sip from the cup. Clear sake flows smoothly from a white ceramic bottle into a small blue cup. This scene contains 3 shots. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent.",
    "caseNumber": 4,
    "videos": {
      "holocine14b": "qualitative_comparison/HoloCine14b/Your_Name/group_0014/group_0014.mp4",
      "msm_1_3b": "qualitative_comparison/MSM-1.3b/Your_Name/group_0014/group_0014.mp4",
      "msm_14b": "qualitative_comparison/MSM-14b/Your_Name/group_0014/group_0014.mp4",
      "kling3": "qualitative_comparison/Kling3/Your_name/group_0014/group_0014.mp4",
      "sora2": "qualitative_comparison/Sora2/Your_name/group_0014/group_0014.mp4",
      "act2cut": "qualitative_comparison/Act2Cut/Your_Name/group_0014/group_0014.mp4",
      "happyhorse1": "qualitative_comparison/Happyhorse1/Your_Name/group_0014/group_0014.mp4",
      "seedance2": "qualitative_comparison/Seedance2/Your_name/group_0014/group_0014.mp4",
      "cinetrans": "qualitative_comparison/CineTrans/Your_Name/group_0014/group_0014.mp4",
      "wan2_2_ti2v_5b": "qualitative_comparison/Wan2.2-TI2V-5B/Your_Name/group_0014/group_0014.mp4"
    }
  }
];
