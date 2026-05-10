export interface GalleryItem {
  id: string;
  title: string;
  video: string;
  shots: string[];
  caption: string;
  fullPrompts: string[];
  condFrame: string | null;
  condVideo: string | null;
  storyboards: string[] | null;
}

export type GalleryMode = "t2v" | "i2v" | "s2v" | "v2v";

export const galleryData: Record<GalleryMode, GalleryItem[]> = {
  "t2v": [
    {
      "id": "WALL-E_group_0007",
      "title": "WALL-E · #007",
      "video": "compare_home/t2v/WALL-E_group_0007/group_0007.mp4",
      "shots": [
        "medium close-up",
        "extreme close-up"
      ],
      "caption": "Dimly lit interior atmosphere with warm, subdued lighting and a moody, quiet ambiance. A cluttered interior space with shelves holding various indistinct objects and red lights. 3D animated style featuring highly detailed, realistic textures of rust, metal, and dirt. C1 tilts its head looking around, then raises its mechanical arm to press a red button on its main body panel. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A small, rusty, box-shaped yellow robot with binocular-like eyes and metal tracks. Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is an extreme close-up focused on C1 's control panel and buttons. It uses macro lensing, high-angle right-three-quarter-front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is an extreme close-up focused on C1 's control panel and buttons. It uses macro lensing, high-angle right-three-quarter-front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0003",
      "title": "Harry Potter The Chamber of Secrets · #003",
      "video": "compare_home/t2v/Harry_Potter_The_Chamber_of_Secrets_group_0003/group_0003.mp4",
      "shots": [
        "shot 1",
        "shot 2"
      ],
      "caption": "Dimly lit, quiet indoor residential hallway atmosphere. Hallway featuring a closed door, radiator, and framed pictures. Realistic live-action film with cinematic lighting and natural colors. C1 walks down the hallway, reaches for the door handle, opens the door, and enters the cupboard. The door swings open outward into the hallway. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young boy wearing glasses and a grey shirt. Shot1 begins as a long/wide shot focused on C1 as he enters the hallway and approaches the door on the left, then tightens to a medium shot. It uses wide-angle lensing, eye-level front-view camera angle, direct-view single-subject framing, and deep depth of field. The camera pan left, pans left, and uses stabilized Steadicam-style movement. Shot2 begins as a medium shot focused on C1 's surprised facial expression, then tightens to a medium close-up. It uses normal-standard lensing, eye-level front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pushes in, pans right, uses stabilized Steadicam-style movement, and keeps follow focus on the moving subject.",
      "fullPrompts": [
        "Shot1 begins as a long/wide shot focused on C1 as he enters the hallway and approaches the door on the left, then tightens to a medium shot. It uses wide-angle lensing, eye-level front-view camera angle, direct-view single-subject framing, and deep depth of field. The camera pan left, pans left, and uses stabilized Steadicam-style movement.",
        "Shot2 begins as a medium shot focused on C1 's surprised facial expression, then tightens to a medium close-up. It uses normal-standard lensing, eye-level front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pushes in, pans right, uses stabilized Steadicam-style movement, and keeps follow focus on the moving subject."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Your_Name_group_0009",
      "title": "Your Name · #009",
      "video": "compare_home/t2v/Your_Name_group_0009/group_0009.mp4",
      "shots": [
        "close-up",
        "medium shot"
      ],
      "caption": "Daytime, well-lit indoor environment with bright natural light illuminating the comfortable room. A traditional Japanese-style room featuring a wooden dining table, a rice cooker, and sliding doors. 2D anime style with vibrant colors, soft lighting, and highly detailed background artwork. C1 reaches out her hand to pick up the grey remote control from the wooden table, then holds it up in front of her and presses a button. C2 sits comfortably at the wooden dining table, continuously using her chopsticks to eat food from a bowl. C3 remains seated quietly in the background behind the table, observing the room while looking steadily towards the right. null. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A teenage girl with dark hair wearing a white school shirt and a red bow. C2 is A younger girl with dark pigtails, dressed in a bright yellow hoodie. C3 is An older woman with grey hair and glasses, wearing a green traditional top. Shot1 is a close-up focused on C1 's hand and the remote control. It uses normal-standard lensing, high-angle left-three-quarter-front-view camera angle, direct-view insert framing, and shallow depth of field. The camera tilts up, and uses locked-off tripod stability. Shot2 is a medium shot focused on C1 , C2 , and C3 . It uses normal-standard lensing, eye-level right-three-quarter-front-view camera angle, direct-view three-character framing, and deep depth of field. The camera pushes in, and uses stabilized Steadicam-style movement.",
      "fullPrompts": [
        "Shot1 is a close-up focused on C1 's hand and the remote control. It uses normal-standard lensing, high-angle left-three-quarter-front-view camera angle, direct-view insert framing, and shallow depth of field. The camera tilts up, and uses locked-off tripod stability.",
        "Shot2 is a medium shot focused on C1 , C2 , and C3 . It uses normal-standard lensing, eye-level right-three-quarter-front-view camera angle, direct-view three-character framing, and deep depth of field. The camera pushes in, and uses stabilized Steadicam-style movement."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Good_Will_Hunting_group_0012",
      "title": "Good Will Hunting · #012",
      "video": "compare_home/t2v/Good_Will_Hunting_group_0012/group_0012.mp4",
      "shots": [
        "full shot",
        "medium shot"
      ],
      "caption": "Bright outdoor daytime setting with clear skies and strong sunlight glaring down. An outdoor basketball court surrounded by a chain-link fence, with buildings nearby. Live-action street-style realistic aesthetic with natural lighting and a sun flare effect. C1 aggressively steps forward, winds up his arm, and forcefully punches C2 in the face. C2 attempts to duck but takes the hit, reeling backward uncontrollably from the forceful punch. C3 stands stationary in the background holding a basketball, watching the violent altercation unfold. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young man wearing a striking black and yellow jacket and loose white pants. C2 is A man wearing a white long-sleeve shirt, dark pants, and a dark baseball cap. C3 is A bystander wearing a grey t-shirt, a blue cap, and dark pants. Shot1 is a full shot focused on C3 and C4 . It uses normal-standard lensing, eye-level front-view camera angle, direct-view group framing, and deep depth of field. The camera uses locked-off tripod stability. Shot2 is a medium shot focused on C4 . It uses normal-standard lensing, low-angle right-three-quarter-back-view camera angle, direct-view single-subject framing, deep depth of field, and lens flare. The camera uses handheld stability, and uses high-frame-rate slow motion.",
      "fullPrompts": [
        "Shot1 is a full shot focused on C3 and C4 . It uses normal-standard lensing, eye-level front-view camera angle, direct-view group framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a medium shot focused on C4 . It uses normal-standard lensing, low-angle right-three-quarter-back-view camera angle, direct-view single-subject framing, deep depth of field, and lens flare. The camera uses handheld stability, and uses high-frame-rate slow motion."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0090",
      "title": "Harry Potter The Chamber of Secrets · #090",
      "video": "compare_home/t2v/Harry_Potter_The_Chamber_of_Secrets_group_0090/group_0090.mp4",
      "shots": [
        "medium close-up",
        "shot 2"
      ],
      "caption": "Dimly lit, rustic wooden interior with a tense, cozy atmosphere. A wooden cabin with a bench, chair, and rustic items. Live-action fantasy film with warm, low-key lighting and rustic aesthetics. C1 she sharply turns her head right in annoyance, then stands up with crossed arms, walking forward angrily. C2 he sits quietly in a large armchair, calmly observing the girl's sudden movements and angry demeanor. C3 he remains seated on the wooden bench, slightly hunched over while holding a bucket on his lap. C4 he sits on the bench beside the other boy, silently watching the girl as she walks forward. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young girl with thick wavy hair wearing a robe. C2 is A large man with a thick beard in maroon clothing. C3 is A ginger-haired boy in a robe holding a bucket. C4 is A dark-haired boy in a robe sitting on a bench. Shot1 is a medium close-up focused on C1 's face, capturing her side profile in a pensive moment before she abruptly turns her head. It uses short-telephoto compression, eye-level left-side-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 begins as a medium full shot (mfs) focused on C1 as the camera pushes in, highlighting her annoyed expression while she crosses her arms, separating her from the background characters C2 and C3 , then changes to a medium close-up. It uses normal-standard lensing, eye-level right-three-quarter-front-view camera angle, direct-view group framing, and deep depth of field. The camera pushes in, pans left, uses stabilized Steadicam-style movement, and keeps follow focus on the moving subject.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 's face, capturing her side profile in a pensive moment before she abruptly turns her head. It uses short-telephoto compression, eye-level left-side-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 begins as a medium full shot (mfs) focused on C1 as the camera pushes in, highlighting her annoyed expression while she crosses her arms, separating her from the background characters C2 and C3 , then changes to a medium close-up. It uses normal-standard lensing, eye-level right-three-quarter-front-view camera angle, direct-view group framing, and deep depth of field. The camera pushes in, pans left, uses stabilized Steadicam-style movement, and keeps follow focus on the moving subject."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Your_Name_group_0026_2",
      "title": "Your Name · #026",
      "video": "compare_home/t2v/Your_Name_group_0026_2/group_0026.mp4",
      "shots": [
        "close-up",
        "close-up"
      ],
      "caption": "Bright daytime outdoors with a clear blue sky and fluffy white clouds. Outdoor basketball court with a hoop, net, and green floor with yellow lines. 2D anime style animation featuring vibrant colors, clear outlines, and distinct shadows. A basketball drops completely through the hoop's net, then falls and bounces onto the green court floor. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. Shot1 is a close-up focused on the basketball and the basketball hoop. It uses normal-standard lensing, low-angle left-three-quarter-front-view camera angle, direct-view insert framing, and deep depth of field. The camera uses locked-off tripod stability. Shot2 is a close-up focused on the bouncing basketball. It uses normal-standard lensing, high-angle camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a close-up focused on the basketball and the basketball hoop. It uses normal-standard lensing, low-angle left-three-quarter-front-view camera angle, direct-view insert framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a close-up focused on the bouncing basketball. It uses normal-standard lensing, high-angle camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0006",
      "title": "Harry Potter The Chamber of Secrets · #006",
      "video": "compare_home/t2v/Harry_Potter_The_Chamber_of_Secrets_group_0006/group_0006.mp4",
      "shots": [
        "close-up",
        "long/wide shot"
      ],
      "caption": "A warm, dimly lit interior room at night. A cozy living room with sofas, lamps, and a fireplace. Live-action cinematic style with warm, yellowish color grading. C1 finishes pouring champagne into C4 's glass, then slightly lifts the bottle and maintains his standing posture. C2 sits quietly in his chair, continuously observing C1 pouring the drink without changing his relaxed posture. C3 sits still on the armchair, continuously holding her drink and observing the gathering around the room. C4 holds her pink glass steady to receive the champagne from C1 , then gently pulls it back. C5 remains seated on the sofa, calmly watching C1 serve the drink without making any significant movements. The champagne bottle tilts downwards to pour liquid, then is steadily held in a more upright position. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A heavy-set man wearing a dark suit. C2 is A plump boy wearing a suit and bow tie. C3 is A woman wearing a light pink dress. C4 is An older woman wearing a greenish jacket. C5 is An older bald man wearing a dark suit. Shot1 is a close-up focused on the hands of C1 pouring champagne into a pink crystal glass held by C3 , emphasizing the details of the drink and the gold bracelet, while C2 remains blurred in the background. It uses short-telephoto compression, shoulder-level front-view camera angle, over-the-shoulder insert framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a long/wide shot focused on C1 standing in the center of the room holding a bottle, serving as the visual anchor for the surrounding seated characters. It uses fisheye lensing, high-angle front-view camera angle, direct-view group framing, and deep depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a close-up focused on the hands of C1 pouring champagne into a pink crystal glass held by C3 , emphasizing the details of the drink and the gold bracelet, while C2 remains blurred in the background. It uses short-telephoto compression, shoulder-level front-view camera angle, over-the-shoulder insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a long/wide shot focused on C1 standing in the center of the room holding a bottle, serving as the visual anchor for the surrounding seated characters. It uses fisheye lensing, high-angle front-view camera angle, direct-view group framing, and deep depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Your_Name_group_0014",
      "title": "Your Name · #014",
      "video": "compare_home/t2v/Your_Name_group_0014/group_0014.mp4",
      "shots": [
        "close-up",
        "medium shot",
        "medium close-up"
      ],
      "caption": "Warm, indoor lighting, creating a relaxed and intimate atmosphere for a traditional meal. A traditional Japanese dining room featuring a long table laden with sushi, dishes, and drinks. 2D anime style with warm color grading, detailed food illustrations, and realistic character designs. C1 he pours sake from a white bottle into a small cup for C2 , then lowers the bottle and speaks with a slight smile while looking at his companion. C2 he holds up a small cup with both hands to receive the poured sake, shows a surprised expression, and then takes a respectful sip from the cup. Clear sake flows smoothly from a white ceramic bottle into a small blue cup. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is An older man with grey hair, wearing a dark suit and a yellow tie. C2 is An older, balding man wearing a blue jacket over a collared shirt and red tie. Shot1 is a close-up focused on the hands pouring liquid from a flask into a small cup. It uses normal-standard lensing, high-angle front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a medium shot focused on C1 's hand pouring a drink into C2 's cup. It uses normal-standard lensing, eye-level camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability. Shot3 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a close-up focused on the hands pouring liquid from a flask into a small cup. It uses normal-standard lensing, high-angle front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a medium shot focused on C1 's hand pouring a drink into C2 's cup. It uses normal-standard lensing, eye-level camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot3 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0014",
      "title": "Harry Potter The Chamber of Secrets · #014",
      "video": "compare_home/t2v/Harry_Potter_The_Chamber_of_Secrets_group_0014/group_0014.mp4",
      "shots": [
        "medium shot",
        "medium shot",
        "long/wide shot"
      ],
      "caption": "Nighttime outdoors with artificial house lighting illuminating the surroundings. A brick house with barred windows and a backyard. Live-action fantasy film with dark, dramatic nighttime lighting. C1 sits at the steering wheel, issues a vocal command, and holds on as the vehicle abruptly accelerates and ascends. The flying blue car accelerates, ripping iron bars off the window, then launches into the air, hovering and ascending. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young ginger-haired boy wearing a collared shirt and jacket. Shot1 is a medium shot focused on the action of C1 and C2 in the car as they pull the bars off the window. It uses wide-angle lensing, high-angle right-three-quarter-front-view right-canted camera angle, direct-view two-character framing, and deep depth of field. The camera follows the action, pans left, and uses handheld stability. Shot2 is a medium shot focused on the blue car hovering in the air with C1 and C2 visible through the windshield. It uses normal, eye-level right-three-quarter-front-view camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability. Shot3 is a long/wide shot focused on the flying blue car containing C1 and C2 hovering between the brick houses. It uses wide-angle lensing, high-angle left-three-quarter-front-view camera angle, direct-view single-subject framing, and deep depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium shot focused on the action of C1 and C2 in the car as they pull the bars off the window. It uses wide-angle lensing, high-angle right-three-quarter-front-view right-canted camera angle, direct-view two-character framing, and deep depth of field. The camera follows the action, pans left, and uses handheld stability.",
        "Shot2 is a medium shot focused on the blue car hovering in the air with C1 and C2 visible through the windshield. It uses normal, eye-level right-three-quarter-front-view camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot3 is a long/wide shot focused on the flying blue car containing C1 and C2 hovering between the brick houses. It uses wide-angle lensing, high-angle left-three-quarter-front-view camera angle, direct-view single-subject framing, and deep depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0108",
      "title": "Harry Potter The Chamber of Secrets · #108",
      "video": "compare_home/t2v/Harry_Potter_The_Chamber_of_Secrets_group_0108/group_0108.mp4",
      "shots": [
        "medium shot",
        "medium close-up",
        "close-up"
      ],
      "caption": "Daylight outdoors with slightly overcast sky and a grassy hill. Crowded outdoor spectator stands featuring sturdy wooden viewing railings. Live-action cinematic fantasy film featuring natural, cool-toned lighting. C1 excitedly gestures forward, raises his wand, and points it forward aggressively while speaking before being stopped. C2 watches the event intently, then reaches out and firmly pushes C1 's arm down to lower his wand. A wooden wand is aggressively thrust forward, then forced downwards. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A red-haired boy wearing a striped scarf and gloves. C2 is A brown-haired girl wearing a dark cloak and striped scarf. Shot1 is a medium shot focused on the reaction of the group, specifically C1 as he raises his arm to point, and the engaged expression of C2 beside him. It uses short-telephoto compression, low-angle front-view camera angle, direct-view group framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a medium close-up focused on the facial expressions of C1 and C2 and the wand held by C1 . It uses short-telephoto compression, eye-level front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pushes in, and uses stabilized Steadicam-style movement. Shot3 is a close-up focused on C2 's expression as a hand holding a wand quickly lowers out of the frame, revealing her face. It uses short-telephoto compression, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses handheld stability.",
      "fullPrompts": [
        "Shot1 is a medium shot focused on the reaction of the group, specifically C1 as he raises his arm to point, and the engaged expression of C2 beside him. It uses short-telephoto compression, low-angle front-view camera angle, direct-view group framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a medium close-up focused on the facial expressions of C1 and C2 and the wand held by C1 . It uses short-telephoto compression, eye-level front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pushes in, and uses stabilized Steadicam-style movement.",
        "Shot3 is a close-up focused on C2 's expression as a hand holding a wand quickly lowers out of the frame, revealing her face. It uses short-telephoto compression, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses handheld stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": null
    }
  ],
  "i2v": [
    {
      "id": "Your_Name_group_0001",
      "title": "Your Name · #001",
      "video": "compare_home/i2v/Your_Name_group_0001/group_0001.mp4",
      "shots": [
        "medium close-up",
        "long/wide shot"
      ],
      "caption": "Sunny daytime outdoors with bright, glowing sunlight and a continuous, strong breeze. A green, open grassy landscape with a clear, unobscured view. 2D anime style featuring vibrant colors, bright sunlight effects, and a stylized artistic aesthetic. C1 runs steadily forward with a gentle smile, her arms swinging rhythmically as the wind dynamically blows her dark hair and red ribbon behind her throughout the sequence. Small dark particles and debris flutter rapidly through the air, carried by the strong wind. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young girl with dark hair, a red ribbon, white uniform shirt, and red bow. Shot1 is a medium close-up focused on C1 . It uses short-telephoto compression, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pushes in, and uses stabilized Steadicam-style movement. Shot2 is a long/wide shot focused on C1 . It uses wide-angle lensing, low-angle left-side-view camera angle, direct-view single-subject framing, and deep depth of field. The camera tracks left with the subject, and uses stabilized Steadicam-style movement.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 . It uses short-telephoto compression, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pushes in, and uses stabilized Steadicam-style movement.",
        "Shot2 is a long/wide shot focused on C1 . It uses wide-angle lensing, low-angle left-side-view camera angle, direct-view single-subject framing, and deep depth of field. The camera tracks left with the subject, and uses stabilized Steadicam-style movement."
      ],
      "condFrame": "compare_home/i2v/Your_Name_group_0001/group_0001_condition_frame.avif",
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Good_Will_Hunting_group_0038",
      "title": "Good Will Hunting · #038",
      "video": "compare_home/i2v/Good_Will_Hunting_group_0038/group_0038.mp4",
      "shots": [
        "medium close-up",
        "medium close-up"
      ],
      "caption": "A dimly lit indoor space, likely a bar, with a relaxed, casual atmosphere. A wooden table in the foreground, with a pool table in the blurred background. Live-action film with naturalistic lighting, slightly muted colors, and a shallow depth of field. C1 speaks to his companion across the table, maintaining steady eye contact with a gentle expression and slightly tilting his head as he delivers his dialogue. C2 looks downward at the table thoughtfully, then slowly raises his left hand to gently rub his forehead while verbally thanking the waiter for bringing the meal. C3 moves a plate of food across the foreground, continuing the serving motion seamlessly to place the plates down on the table in front of the seated men. Plates filled with sandwiches and fries are carried steadily across the space and placed down. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A middle-aged man with a full beard, wearing a blue, short-sleeved plaid shirt. C2 is A blond man wearing a black and white plaid jacket and a striped shirt. C3 is A waiter, visible only by their arms and hands holding serving plates. Shot1 is a medium close-up focused on C1 's face. It uses short-telephoto compression, eye-level front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pushes in, and uses stabilized Steadicam-style movement. Shot2 is a medium close-up focused on C2 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 's face. It uses short-telephoto compression, eye-level front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pushes in, and uses stabilized Steadicam-style movement.",
        "Shot2 is a medium close-up focused on C2 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": "compare_home/i2v/Good_Will_Hunting_group_0038/group_0038_condition_frame.avif",
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "WALL-E_group_0010",
      "title": "WALL-E · #010",
      "video": "compare_home/i2v/WALL-E_group_0010/group_0010.mp4",
      "shots": [
        "close-up",
        "close-up"
      ],
      "caption": "Bright, sunlit outdoor environment with a dusty and desolate atmosphere. Ground completely covered with scattered metal trash, debris, and worn scraps. 3D animation with a realistic, rusty, and weathered aesthetic in a desolate setting. C1 the robot's mechanical arms close inward to scoop up scattered trash, seamlessly continuing the gathering motion across the cut to push the dusty debris into its front compactor. Dust rises as the piles of scattered trash are scraped together and pushed backward. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A small, rusty, box-shaped robot with tread tracks and two mechanical scooping arms. Shot1 is a close-up focused on C1 's scooping arms. It uses medium-telephoto compression, ground-level camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a close-up focused on C1 's front scooping arms and the debris. It uses normal-standard lensing, ground-level front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a close-up focused on C1 's scooping arms. It uses medium-telephoto compression, ground-level camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a close-up focused on C1 's front scooping arms and the debris. It uses normal-standard lensing, ground-level front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": "compare_home/i2v/WALL-E_group_0010/group_0010_condition_frame.avif",
      "condVideo": null,
      "storyboards": null
    },
    {
      "id": "Your_Name_group_0097",
      "title": "Your Name · #097",
      "video": "compare_home/i2v/Your_Name_group_0097/group_0097.mp4",
      "shots": [
        "close-up",
        "medium close-up"
      ],
      "caption": "Nighttime outdoor environment with a calm atmosphere and a dark, starry sky. An outdoor area featuring dark silhouettes of trees and a distant building with glowing lights. 2D anime style with detailed character art, dark night lighting, and lens flare effects. C1 speaks while gently raising her left hand to reveal a blue ring, and continues talking with her hand held up as her gaze shifts slightly. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A woman with long dark hair, wearing a grey jacket, gold necklace, and blue ring. Shot1 is a close-up focused on C1 's lower face, hand, and ring. It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, shallow depth of field, and lens flare. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a close-up focused on C1 's lower face, hand, and ring. It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, shallow depth of field, and lens flare. The camera uses locked-off tripod stability."
      ],
      "condFrame": "compare_home/i2v/Your_Name_group_0097/group_0097_condition_frame.avif",
      "condVideo": null,
      "storyboards": null
    }
  ],
  "s2v": [
    {
      "id": "Your_Name_group_0040",
      "title": "Your Name · #040",
      "video": "compare_home/s2v/Your_Name_group_0040/group_0040.mp4",
      "shots": [
        "medium shot",
        "medium full shot",
        "shot 3"
      ],
      "caption": "Brightly lit daytime atmosphere with warm sunlight streaming into an indoor space. An indoor gymnasium featuring tiled walls, glass doors, and a fire alarm box. 2D anime style with vibrant colors, cinematic lighting, and smooth dynamic animation. C1 holding a basketball, she playfully interacts with the boy, then turns to execute a high jump. She lands with a radiant smile, enthusiastically running forward toward the camera. C2 initially reacting defensively with raised hands and a surprised expression, he shifts to the background, watching the girl's impressive jump shot in continuous astonishment throughout the ongoing play. C3 standing behind the main action, she continuously observes the jumping girl with wide-eyed shock and open-mouthed awe as the dynamic sequence unfolds on the bright basketball court. The basketball is held firmly before being thrown upwards in a high arc during the jump. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A girl with a black ponytail wearing a yellow and red basketball uniform. C2 is A boy with short brown hair in a yellow and red basketball uniform. C3 is A short-haired girl wearing a yellow and red basketball uniform. Shot1 is a medium shot focused on C1 and C2 . It uses normal-standard lensing, eye-level back-view camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability. Shot2 is a medium full shot focused on C1 and the basketball. It uses normal-standard lensing, hip-level right-three-quarter-back-view camera angle, direct-view two-character framing, and deep depth of field. The camera tilts up, and uses locked-off tripod stability. Shot3 begins as a close-up focused on C1 , then widens to a medium close-up. It uses normal-standard lensing, low-angle front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera tilts up, and uses stabilized Steadicam-style movement.",
      "fullPrompts": [
        "Shot1 is a medium shot focused on C1 and C2 . It uses normal-standard lensing, eye-level back-view camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a medium full shot focused on C1 and the basketball. It uses normal-standard lensing, hip-level right-three-quarter-back-view camera angle, direct-view two-character framing, and deep depth of field. The camera tilts up, and uses locked-off tripod stability.",
        "Shot3 begins as a close-up focused on C1 , then widens to a medium close-up. It uses normal-standard lensing, low-angle front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera tilts up, and uses stabilized Steadicam-style movement."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": [
        "compare_home/s2v/Your_Name_group_0040/group_0040_storyboard_00.avif",
        "compare_home/s2v/Your_Name_group_0040/group_0040_storyboard_01.avif",
        "compare_home/s2v/Your_Name_group_0040/group_0040_storyboard_02.avif"
      ]
    },
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0078",
      "title": "Harry Potter The Chamber of Secrets · #078",
      "video": "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0078/group_0078.mp4",
      "shots": [
        "long/wide shot",
        "long/wide shot",
        "long/wide shot",
        "medium close-up"
      ],
      "caption": "Bright daytime in a bustling, magical grand dining hall. Long dining tables laden with food, amidst gothic architecture. Live-action fantasy film, warm lighting, and rich magical aesthetic. C1 he flinches and recoils in sudden surprise as scattered debris and food rain down around him. C2 he flinches and ducks slightly alongside C1 when the sudden crash scatters food across the table. C3 it flies continuously through the hall, swoops down rapidly, and crashes directly into a bowl of chips. A bowl of chips bursts, sending food and feathers flying upward into the air upon impact. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young boy with red hair wearing a dark uniform. C2 is A young boy with dark hair and round glasses. C3 is A large, grey and brown patterned owl. Shot1 is a long/wide shot focused on the owl C3 flying swiftly across the hall above the students. It uses wide-angle lensing, high-angle left-side-view camera angle, direct-view group framing, and deep depth of field. The camera pans left, and uses stabilized Steadicam-style movement. Shot2 is a long/wide shot focused on the C3 as it flies swiftly down the center of the hall towards the camera. It uses wide-angle lensing, high-angle front-view camera angle, direct-view master framing, and shallow depth of field. The camera uses locked-off tripod stability, and keeps follow focus on the moving subject. Shot3 is a long/wide shot focused on C3 flying down the center of the long dining table and crashing messily into bowls of food while students watch. It uses wide-angle lensing, shoulder-level front-view camera angle, direct-view group framing, and deep depth of field. The camera uses locked-off tripod stability. Shot4 is a medium close-up focused on the facial expression and reaction of C1 as he sits beside C2 . It uses short-telephoto compression, eye-level left-three-quarter-front-view camera angle, left three-quarter front-view two-character framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a long/wide shot focused on the owl C3 flying swiftly across the hall above the students. It uses wide-angle lensing, high-angle left-side-view camera angle, direct-view group framing, and deep depth of field. The camera pans left, and uses stabilized Steadicam-style movement.",
        "Shot2 is a long/wide shot focused on the C3 as it flies swiftly down the center of the hall towards the camera. It uses wide-angle lensing, high-angle front-view camera angle, direct-view master framing, and shallow depth of field. The camera uses locked-off tripod stability, and keeps follow focus on the moving subject.",
        "Shot3 is a long/wide shot focused on C3 flying down the center of the long dining table and crashing messily into bowls of food while students watch. It uses wide-angle lensing, shoulder-level front-view camera angle, direct-view group framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot4 is a medium close-up focused on the facial expression and reaction of C1 as he sits beside C2 . It uses short-telephoto compression, eye-level left-three-quarter-front-view camera angle, left three-quarter front-view two-character framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": [
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0078/group_0078_storyboard_00.avif",
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0078/group_0078_storyboard_01.avif",
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0078/group_0078_storyboard_02.avif",
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0078/group_0078_storyboard_03.avif"
      ]
    },
    {
      "id": "Good_Will_Hunting_group_0049",
      "title": "Good Will Hunting · #049",
      "video": "compare_home/s2v/Good_Will_Hunting_group_0049/group_0049.mp4",
      "shots": [
        "medium shot",
        "medium close-up"
      ],
      "caption": "A well-lit indoor office environment with a calm and serious atmosphere during the daytime. An office with a cluttered desk containing papers, a lamp, and a bulletin board behind. Live-action cinematic style with realistic lighting, natural color grading, and clear visual texture. C1 sits with hands clasped while speaking, then turns right and leans over his desk, continuing this leaning movement seamlessly across the shot transition to look down at his workspace. C2 initially seen from the back sitting in a chair, then stands up in the background and observes the older man leaning over the desk. null. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is An older man with a graying beard, glasses, and a patterned short-sleeve button-up shirt. C2 is A younger man with blonde hair, wearing a simple olive green short-sleeve t-shirt. Shot1 is a medium shot focused on C1 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pushes in, uses stabilized Steadicam-style movement, and keeps follow focus on the moving subject.",
      "fullPrompts": [
        "Shot1 is a medium shot focused on C1 . It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pushes in, uses stabilized Steadicam-style movement, and keeps follow focus on the moving subject."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": [
        "compare_home/s2v/Good_Will_Hunting_group_0049/group_0049_storyboard_00.avif",
        "compare_home/s2v/Good_Will_Hunting_group_0049/group_0049_storyboard_01.avif"
      ]
    },
    {
      "id": "Your_Name_group_0066",
      "title": "Your Name · #066",
      "video": "compare_home/s2v/Your_Name_group_0066/group_0066.mp4",
      "shots": [
        "medium close-up",
        "full shot",
        "medium close-up",
        "extreme close-up",
        "medium close-up"
      ],
      "caption": "A dark, dimly lit rocky cave environment with a mysterious and awe-inspiring atmosphere. A rugged stone crevice featuring a glowing, mystical depiction of a comet on its ceiling. 2D anime style featuring dramatic lighting, lens flares, and highly expressive, detailed character animation. C1 he slips backward down the rocky slope, flailing his arms, then stares wide-eyed in profound shock, raising both hands towards the glowing comet mural on the cave ceiling above. Floating dust particles and water droplets catch the light as they drift through the air. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young man with dark messy hair, wearing a dark jacket, holding a smartphone. Shot1 is a medium close-up focused on C1 's face. It uses normal-standard lensing, low-angle left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a full shot focused on C1 . It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view single-subject framing, and deep depth of field. The camera booms down, uses stabilized Steadicam-style movement, and uses high-frame-rate slow motion. Shot3 is a medium close-up focused on C1 's face. It uses normal-standard lensing, low-angle front-view camera angle, direct-view single-subject framing, shallow depth of field, and lens flare. The camera pushes in, and uses stabilized Steadicam-style movement. Shot4 is an extreme close-up focused on C1 's eyes. It uses normal-standard lensing, eye-level front-view camera angle, direct-view single-subject framing, shallow depth of field, and lens flare. The camera pushes in, zooms in, and uses locked-off tripod stability. Shot5 is a medium close-up focused on C1 's back and the glowing patterns on the wall. It uses normal-standard lensing, eye-level back-view camera angle, direct-view single-subject framing, and deep depth of field. The camera pushes in, and uses stabilized Steadicam-style movement.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 's face. It uses normal-standard lensing, low-angle left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a full shot focused on C1 . It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view single-subject framing, and deep depth of field. The camera booms down, uses stabilized Steadicam-style movement, and uses high-frame-rate slow motion.",
        "Shot3 is a medium close-up focused on C1 's face. It uses normal-standard lensing, low-angle front-view camera angle, direct-view single-subject framing, shallow depth of field, and lens flare. The camera pushes in, and uses stabilized Steadicam-style movement.",
        "Shot4 is an extreme close-up focused on C1 's eyes. It uses normal-standard lensing, eye-level front-view camera angle, direct-view single-subject framing, shallow depth of field, and lens flare. The camera pushes in, zooms in, and uses locked-off tripod stability.",
        "Shot5 is a medium close-up focused on C1 's back and the glowing patterns on the wall. It uses normal-standard lensing, eye-level back-view camera angle, direct-view single-subject framing, and deep depth of field. The camera pushes in, and uses stabilized Steadicam-style movement."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": [
        "compare_home/s2v/Your_Name_group_0066/group_0066_storyboard_00.avif",
        "compare_home/s2v/Your_Name_group_0066/group_0066_storyboard_01.avif",
        "compare_home/s2v/Your_Name_group_0066/group_0066_storyboard_02.avif",
        "compare_home/s2v/Your_Name_group_0066/group_0066_storyboard_03.avif",
        "compare_home/s2v/Your_Name_group_0066/group_0066_storyboard_04.avif"
      ]
    },
    {
      "id": "WALL-E_group_0150",
      "title": "WALL-E · #150",
      "video": "compare_home/s2v/WALL-E_group_0150/group_0150.mp4",
      "shots": [
        "medium shot",
        "close-up",
        "medium shot"
      ],
      "caption": "A bright, sunlit, hazy outdoors with a dusty, desolate, and arid atmosphere. A barren wasteland landscape scattered with debris, scrap metal, and trash in the background. 3D animated cinematic style with realistic lighting, detailed textures, and a warm color palette. C1 extends her arm, detaching her fingers to fall towards C2 's outstretched hands, then suddenly retracts the floating pieces away from his claw, reassembling them into a solid arm. C2 holds his metallic claws out expectantly to catch C1 's falling fingers, keeping his hands outstretched before watching the floating pieces suddenly reverse direction and fly away from his grasp. The detached, white robotic finger pieces drop downward before rapidly reversing their floating trajectory. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A sleek, white, egg-shaped robot featuring glowing blue digital eyes and a smooth surface. C2 is A small, rusty, box-shaped robot with binocular-like eyes and metallic mechanical claws. Shot1 is a medium shot focused on C1 's arm and C2 's hand. It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pans right, and uses locked-off tripod stability. Shot2 is a close-up focused on C2 's metal claw, C1 's white arm, and the floating white fragments between them. It uses normal-standard lensing, eye-level right-side-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot3 is a medium shot focused on C1 and C2 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium shot focused on C1 's arm and C2 's hand. It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pans right, and uses locked-off tripod stability.",
        "Shot2 is a close-up focused on C2 's metal claw, C1 's white arm, and the floating white fragments between them. It uses normal-standard lensing, eye-level right-side-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot3 is a medium shot focused on C1 and C2 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": [
        "compare_home/s2v/WALL-E_group_0150/group_0150_storyboard_00.avif",
        "compare_home/s2v/WALL-E_group_0150/group_0150_storyboard_01.avif",
        "compare_home/s2v/WALL-E_group_0150/group_0150_storyboard_02.avif"
      ]
    },
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0236_2",
      "title": "Harry Potter The Chamber of Secrets · #236",
      "video": "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0236_2/group_0236.mp4",
      "shots": [
        "medium shot",
        "medium full shot",
        "long/wide shot",
        "shot 4"
      ],
      "caption": "Dimly lit stone corridor with daylight filtering through arched windows. Long stone hallway featuring arched windows and a solid floor. Live-action fantasy cinematic style with dark, moody lighting effects. C1 steps forward defensively, raises his hand, and snaps his fingers to cast a powerful blast of magical energy. C2 is struck by the spell, violently blasted backward through the air down the corridor, and crashes onto the floor. C3 stands quietly in the background, observing the sudden confrontation as C1 defends him by repelling C2 . A burst of bright blue magical energy erupts from C1 's hand, forcefully propelling C2 backwards through the air. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is Small wrinkly house-elf with large ears wearing a dirty rag. C2 is Man with long blonde hair dressed in a black cloak. C3 is Young boy wearing round glasses and a dark school robe. Shot1 is a medium shot focused on C1 , specifically emphasizing his aggressive hand gesture and stern facial expression through a high-angle perspective. It uses wide-angle lensing, high-angle front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a medium full shot focused on C1 casting a spell and the magical impact pushing C2 backward. It uses wide-angle lensing, high-angle left-three-quarter-front-view camera angle, over-the-shoulder three-character framing, and deep depth of field. The camera uses locked-off tripod stability. Shot3 is a long/wide shot focused on the magical blast propelling C2 backward down the hallway, viewed from a high angle behind C3 and C1 . It uses wide-angle lensing, high-angle back-view camera angle, direct-view three-character framing, and deep depth of field. The camera uses locked-off tripod stability. Shot4 begins as a long/wide shot focused on the sudden backward motion and impact of C2 , tracking him from a distance until he lands in a close-up, then tightens to a close-up. It uses wide-angle lensing, high-angle front-view right-canted camera angle, direct-view single-subject framing, and shallow depth of field. The camera tilt down, tilts down, uses handheld stability, and keeps follow focus on the moving subject.",
      "fullPrompts": [
        "Shot1 is a medium shot focused on C1 , specifically emphasizing his aggressive hand gesture and stern facial expression through a high-angle perspective. It uses wide-angle lensing, high-angle front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a medium full shot focused on C1 casting a spell and the magical impact pushing C2 backward. It uses wide-angle lensing, high-angle left-three-quarter-front-view camera angle, over-the-shoulder three-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot3 is a long/wide shot focused on the magical blast propelling C2 backward down the hallway, viewed from a high angle behind C3 and C1 . It uses wide-angle lensing, high-angle back-view camera angle, direct-view three-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot4 begins as a long/wide shot focused on the sudden backward motion and impact of C2 , tracking him from a distance until he lands in a close-up, then tightens to a close-up. It uses wide-angle lensing, high-angle front-view right-canted camera angle, direct-view single-subject framing, and shallow depth of field. The camera tilt down, tilts down, uses handheld stability, and keeps follow focus on the moving subject."
      ],
      "condFrame": null,
      "condVideo": null,
      "storyboards": [
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0236_2/group_0236_storyboard_00.avif",
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0236_2/group_0236_storyboard_01.avif",
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0236_2/group_0236_storyboard_02.avif",
        "compare_home/s2v/Harry_Potter_The_Chamber_of_Secrets_group_0236_2/group_0236_storyboard_03.avif"
      ]
    }
  ],
  "v2v": [
    {
      "id": "Harry_Potter_The_Chamber_of_Secrets_group_0005",
      "title": "Harry Potter The Chamber of Secrets · #005",
      "video": "compare_home/v2v/Harry_Potter_The_Chamber_of_Secrets_group_0005/group_0005.mp4",
      "shots": [
        "shot 1",
        "medium full shot",
        "medium close-up"
      ],
      "caption": "Dimly lit bedroom at night with a tense dramatic atmosphere. Room with a wooden dresser, a stool, and white door. Live-action fantasy film with dark moody color grading. C1 looks distraught, turns towards the wooden dresser, and violently and repeatedly bangs his head against the drawer in self-punishment. C2 steps forward with a concerned expression, reaching out with both hands to intervene and stop the creature's self-harm. The wooden dresser shakes slightly as it is repeatedly impacted. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A small elf-like creature wearing a dirty cloth sack. C2 is A boy with dark hair, glasses, and blue shirt. Shot1 begins as a close-up focused on C1 's guilt-ridden expression and his sudden movement to punish himself against the furniture, then widens to a medium close-up. It uses normal-standard lensing, high-angle left-side-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera follows the action, pans left, uses handheld stability, and keeps follow focus on the moving subject. Shot2 is a medium full shot (mfs) focused on C1 violently banging his head against the dresser drawer while C2 reacts with shock and attempts to intervene. It uses wide-angle lensing, low-angle right-three-quarter-front-view camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability. Shot3 is a medium close-up focused on C1 banging his head against the wooden dresser. It uses standard, high-angle right-three-quarter-back-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 begins as a close-up focused on C1 's guilt-ridden expression and his sudden movement to punish himself against the furniture, then widens to a medium close-up. It uses normal-standard lensing, high-angle left-side-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera follows the action, pans left, uses handheld stability, and keeps follow focus on the moving subject.",
        "Shot2 is a medium full shot (mfs) focused on C1 violently banging his head against the dresser drawer while C2 reacts with shock and attempts to intervene. It uses wide-angle lensing, low-angle right-three-quarter-front-view camera angle, direct-view two-character framing, and deep depth of field. The camera uses locked-off tripod stability.",
        "Shot3 is a medium close-up focused on C1 banging his head against the wooden dresser. It uses standard, high-angle right-three-quarter-back-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": "compare_home/v2v/Harry_Potter_The_Chamber_of_Secrets_group_0005/group_0005_condition_video.mp4",
      "storyboards": null
    },
    {
      "id": "Your_Name_group_0085",
      "title": "Your Name · #085",
      "video": "compare_home/v2v/Your_Name_group_0085/group_0085.mp4",
      "shots": [
        "medium close-up",
        "medium close-up"
      ],
      "caption": "Twilight sky with vibrant pink, purple, and orange hues over a calm ocean. An outdoor location by the sea with a clear, expansive view of the horizon. 2D anime style with soft lighting, warm color grading, and highly detailed skies. C1 she looks ahead, closes her eyes briefly, then raises a red ribbon, tying it around her hair like a headband. She then looks at C2 and smiles while speaking. C2 he appears in the foreground, with his back to the camera, and raises his hand towards his neck while responding to the question from C1 . null. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A young girl with short black hair wearing a white shirt and a red bowtie. C2 is A young man with dark hair wearing a dark jacket, seen from behind. Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view single-subject framing, and deep depth of field. The camera pushes in, and uses stabilized Steadicam-style movement. Shot2 is a medium close-up focused on C1 's face and upper body. It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view single-subject framing, and deep depth of field. The camera pushes in, and uses stabilized Steadicam-style movement.",
        "Shot2 is a medium close-up focused on C1 's face and upper body. It uses normal-standard lensing, eye-level front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": "compare_home/v2v/Your_Name_group_0085/group_0085_condition_video.mp4",
      "storyboards": null
    },
    {
      "id": "Good_Will_Hunting_group_0032",
      "title": "Good Will Hunting · #032",
      "video": "compare_home/v2v/Good_Will_Hunting_group_0032/group_0032.mp4",
      "shots": [
        "shot 1",
        "medium close-up"
      ],
      "caption": "Nighttime, heavy rain, dimly lit outdoors transitioning to the dark interior of a car. A car parked outside next to a wall lamp, and the car's interior with seats. Live-action cinematic style with dark, moody lighting and a realistic aesthetic. C1 he opens the door in the rain, ducks and enters the car, settling into the passenger seat, then closes the door and converses with C2 . C2 he sits behind the steering wheel, turns his head to watch C1 enter, and engages in conversation with him. Heavy rain pounds against the car's windshield as the passenger door opens and shuts. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A man with short wet hair, wearing a dark, rain-soaked jacket. C2 is A man wearing a bright blue baseball cap and a dark top. Shot1 begins as a medium shot focused on C1 and C2 , then tightens to a medium close-up. It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pans right, uses locked-off tripod stability, and keeps follow focus on the moving subject. Shot2 is a medium close-up focused on C1 's face. It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses stabilized Steadicam-style movement, and pulls focus between subjects.",
      "fullPrompts": [
        "Shot1 begins as a medium shot focused on C1 and C2 , then tightens to a medium close-up. It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera pans right, uses locked-off tripod stability, and keeps follow focus on the moving subject.",
        "Shot2 is a medium close-up focused on C1 's face. It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, over-the-shoulder two-character framing, and shallow depth of field. The camera uses stabilized Steadicam-style movement, and pulls focus between subjects."
      ],
      "condFrame": null,
      "condVideo": "compare_home/v2v/Good_Will_Hunting_group_0032/group_0032_condition_video.mp4",
      "storyboards": null
    },
    {
      "id": "WALL-E_group_0006",
      "title": "WALL-E · #006",
      "video": "compare_home/v2v/WALL-E_group_0006/group_0006.mp4",
      "shots": [
        "medium close-up",
        "close-up"
      ],
      "caption": "Dim, cozy interior lit by warm ambient light, creating a nostalgic, cluttered atmosphere. Wooden shelves packed with organized human trinkets, utensil cups, and a Rubik's cube. 3D animated cinematic style featuring highly realistic textures of rust, metal, and worn plastic. C1 examines a Rubik's cube, extends his arm to place it onto a shelf, then hesitates with a spork before setting it between cups of spoons and forks. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A small, rusty, yellow, box-shaped robot with binocular eyes and mechanical claw-like hands. Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is a close-up focused on C1 's hand and the spork. It uses normal-standard lensing, eye-level front-view camera angle, direct-view insert framing, and shallow depth of field. The camera pans left, and uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is a close-up focused on C1 's hand and the spork. It uses normal-standard lensing, eye-level front-view camera angle, direct-view insert framing, and shallow depth of field. The camera pans left, and uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": "compare_home/v2v/WALL-E_group_0006/group_0006_condition_video.mp4",
      "storyboards": null
    },
    {
      "id": "WALL-E_group_0150",
      "title": "WALL-E · #150",
      "video": "compare_home/v2v/WALL-E_group_0150/group_0150.mp4",
      "shots": [
        "medium shot",
        "close-up",
        "medium shot"
      ],
      "caption": "A bright, sunlit, hazy outdoors with a dusty, desolate, and arid atmosphere. A barren wasteland landscape scattered with debris, scrap metal, and trash in the background. 3D animated cinematic style with realistic lighting, detailed textures, and a warm color palette. C1 extends her arm, detaching her fingers to fall towards C2 's outstretched hands, then suddenly retracts the floating pieces away from his claw, reassembling them into a solid arm. C2 holds his metallic claws out expectantly to catch C1 's falling fingers, keeping his hands outstretched before watching the floating pieces suddenly reverse direction and fly away from his grasp. The detached, white robotic finger pieces drop downward before rapidly reversing their floating trajectory. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A sleek, white, egg-shaped robot featuring glowing blue digital eyes and a smooth surface. C2 is A small, rusty, box-shaped robot with binocular-like eyes and metallic mechanical claws. Shot1 is a medium shot focused on C1 's arm and C2 's hand. It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pans right, and uses locked-off tripod stability. Shot2 is a close-up focused on C2 's metal claw, C1 's white arm, and the floating white fragments between them. It uses normal-standard lensing, eye-level right-side-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot3 is a medium shot focused on C1 and C2 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium shot focused on C1 's arm and C2 's hand. It uses normal-standard lensing, eye-level left-side-view camera angle, direct-view two-character framing, and shallow depth of field. The camera pans right, and uses locked-off tripod stability.",
        "Shot2 is a close-up focused on C2 's metal claw, C1 's white arm, and the floating white fragments between them. It uses normal-standard lensing, eye-level right-side-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot3 is a medium shot focused on C1 and C2 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view two-character framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": "compare_home/v2v/WALL-E_group_0150/group_0150_condition_video.mp4",
      "storyboards": null
    },
    {
      "id": "WALL-E_group_0007",
      "title": "WALL-E · #007",
      "video": "compare_home/v2v/WALL-E_group_0007/group_0007.mp4",
      "shots": [
        "medium close-up",
        "extreme close-up"
      ],
      "caption": "Dimly lit interior atmosphere with warm, subdued lighting and a moody, quiet ambiance. A cluttered interior space with shelves holding various indistinct objects and red lights. 3D animated style featuring highly detailed, realistic textures of rust, metal, and dirt. C1 tilts its head looking around, then raises its mechanical arm to press a red button on its main body panel. All shots match on [action cut], resulting action/motion continuous and spatio-temporal coherent. C1 is A small, rusty, box-shaped yellow robot with binocular-like eyes and metal tracks. Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability. Shot2 is an extreme close-up focused on C1 's control panel and buttons. It uses macro lensing, high-angle right-three-quarter-front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability.",
      "fullPrompts": [
        "Shot1 is a medium close-up focused on C1 . It uses normal-standard lensing, eye-level left-three-quarter-front-view camera angle, direct-view single-subject framing, and shallow depth of field. The camera uses locked-off tripod stability.",
        "Shot2 is an extreme close-up focused on C1 's control panel and buttons. It uses macro lensing, high-angle right-three-quarter-front-view camera angle, direct-view insert framing, and shallow depth of field. The camera uses locked-off tripod stability."
      ],
      "condFrame": null,
      "condVideo": "compare_home/v2v/WALL-E_group_0007/group_0007_condition_video.mp4",
      "storyboards": null
    }
  ]
};
