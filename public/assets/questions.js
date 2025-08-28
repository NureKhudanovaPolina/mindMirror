var QUESTIONS = [
  {
    "question": "Do you often feel anxious without an obvious reason?",
    "answers": [
      "Yes, almost all the time, and it interferes with my life.",
      "Yes, but usually I can cope with it.",
      "Only in some cases when there is a specific reason.",
      "No, rarely or never."
    ]
  },
  {
    "question": "Do you often wake up at night because of anxious thoughts?",
    "answers": [
      "Yes, almost every night.",
      "Sometimes, if I had a tough day.",
      "Rarely, but it has happened.",
      "Never, I sleep well."
    ]
  },
  {
    "question": "Do you feel tension in your muscles or headaches due to worry?",
    "answers": [
      "Yes, almost all the time.",
      "Yes, but only in stressful situations.",
      "Sometimes, but it goes away quickly.",
      "No, it has never happened."
    ]
  },
  {
    "question": "Do you have intrusive thoughts about negative events that might happen?",
    "answers": [
      "Yes, they constantly haunt me.",
      "Yes, but I can control them.",
      "Sometimes they appear, but they disappear quickly.",
      "No, I don’t think about it."
    ]
  },
  {
    "question": "Do you avoid certain situations because of fear or anxiety?",
    "answers": [
      "Yes, I try not to get into such situations.",
      "Sometimes I feel uncomfortable, but I still act.",
      "Rarely, but it happens.",
      "No, I don't avoid situations because of fear."
    ]
  },
  {
    "question": "Do you worry about not being able to handle your responsibilities?",
    "answers": [
      "Yes, I am constantly afraid that something will go wrong.",
      "Yes, but usually it motivates me to try harder.",
      "Sometimes I have these thoughts, but they don't bother me.",
      "No, I am confident in my abilities."
    ]
  },
  {
    "question": "Do you notice a quick heartbeat or shortness of breath when worried?",
    "answers": [
      "Yes, it happens often.",
      "Yes, but only in situations of intense stress.",
      "It has happened a few times, but rarely.",
      "Never, it has never happened."
    ]
  },
  {
    "question": "Do you feel a loss of interest in activities that once brought you joy?",
    "answers": [
      "Yes, I no longer enjoy my favorite activities.",
      "Yes, but it happens occasionally.",
      "Sometimes, but it’s not significant.",
      "No, I still enjoy my hobbies."
    ]
  },
  {
    "question": "Do you ever feel like you can't get out of bed?",
    "answers": [
      "Yes, this happens frequently.",
      "Yes, but I force myself to get up.",
      "Rarely, but it has happened.",
      "No, I always have energy."
    ]
  },
  {
    "question": "Do you often feel deeply tired or lack energy, even without physical exertion?",
    "answers": [
      "Yes, almost constantly, even when I rest enough.",
      "Sometimes, but those periods don't last long.",
      "No, I feel normal most of the time."
    ]
  },
  {
    "question": "Do you notice a significant decrease in interest or pleasure in activities that once brought joy?",
    "answers": [
      "Yes, almost all activities I used to enjoy no longer bring joy.",
      "Some things stopped being interesting, but there are still activities I enjoy.",
      "No, I still enjoy my hobbies and favorite things."
    ]
  },
  {
    "question": "How often do you have trouble concentrating or making decisions?",
    "answers": [
      "Almost always, even in simple situations.",
      "Sometimes it's hard to concentrate, but not constantly.",
      "No, I don't have significant concentration problems."
    ]
  },
  {
    "question": "Have you ever had periods when you didn’t want to talk to anyone or leave the house?",
    "answers": [
      "Yes, I often avoid people and stay alone.",
      "Sometimes, but those periods don't last long.",
      "No, I maintain social contacts without problems."
    ]
  },
  {
    "question": "Do you feel constant guilt or worthlessness?",
    "answers": [
      "Yes, I almost always feel like I'm not good enough or that I’m doing everything wrong.",
      "Sometimes I feel that way, but it passes.",
      "No, I rarely or never feel like that."
    ]
  },
  {
    "question": "Have you noticed significant changes in your sleep (insomnia or excessive sleepiness)?",
    "answers": [
      "Yes, either I can't sleep for hours, or I sleep more than 12 hours a day.",
      "Yes, but it happens occasionally and doesn't last long.",
      "No, my sleep is fairly stable."
    ]
  },
  {
    "question": "Have you noticed significant changes in your appetite (significant loss or overeating)?",
    "answers": [
      "Yes, either I hardly eat or I eat much more than before.",
      "Sometimes there are changes in appetite, but they are not significant.",
      "No, my appetite is stable."
    ]
  },
  {
    "question": "How often do you feel that the future has no meaning or that the situation will never improve?",
    "answers": [
      "Constantly, I don’t see any meaning in the future.",
      "Sometimes, but the feeling doesn't last long.",
      "No, I don't feel that way."
    ]
  },
  {
    "question": "Have you ever had thoughts that it would be better if you weren’t here?",
    "answers": [
      "Yes, I often think about this.",
      "Sometimes such thoughts arise, but they pass.",
      "No, I never think about it."
    ]
  },
  {
    "question": "How often do you feel inner tension or irritability without an obvious reason?",
    "answers": [
      "Very often, even small things irritate me.",
      "Sometimes, but it passes quickly.",
      "No, I rarely feel strong irritability."
    ]
  },
  {
    "question": "How do you usually feel about your appearance or general look?",
    "answers": [
      "I am almost always dissatisfied with myself and feel uncomfortable about it.",
      "Sometimes I doubt myself, but overall, it’s not a significant issue.",
      "I don't have major concerns about my appearance."
    ]
  },
  {
    "question": "Do you feel difficulties in performing even simple daily tasks (like cooking, personal hygiene, cleaning)?",
    "answers": [
      "Yes, often even the simplest tasks seem impossible.",
      "There are such periods, but I still find the strength to do them.",
      "No, I don’t have difficulties with daily tasks."
    ]
  },
  {
    "question": "Do you have intrusive thoughts that you can't control, even if they seem nonsensical or illogical?",
    "answers": [
      "Yes, constantly, they don't give me peace.",
      "Sometimes, but I can ignore them.",
      "No, I don't have such thoughts."
    ]
  },
  {
    "question": "Do you feel the need to check certain things repeatedly (e.g., whether doors are locked, whether the stove is off), even if you know you’ve already checked?",
    "answers": [
      "Yes, I check several times, otherwise, I feel strong anxiety.",
      "Sometimes I have doubts, but usually I only check once.",
      "No, once is enough for me."
    ]
  },
  {
    "question": "Do you perform certain actions (like washing hands, counting objects, touching things) in a strict order or a certain number of times to reduce anxiety?",
    "answers": [
      "Yes, if I don't do it “right,” I feel strong discomfort.",
      "Sometimes I catch myself doing this, but it's not mandatory.",
      "No, I don’t have such a habit."
    ]
  },
  {
    "question": "Do you fear that something bad will happen to you or your loved ones if you don’t complete certain rituals or actions?",
    "answers": [
      "Yes, and it forces me to repeat certain actions again and again.",
      "Sometimes such thoughts arise, but I try not to pay attention to them.",
      "No, I don’t have such a fear."
    ]
  },
  {
    "question": "Do you feel strong discomfort due to order or symmetry of objects?",
    "answers": [
      "Yes, I feel discomfort if things are not arranged as they “should” be.",
      "I like order, but if something isn't perfect, it doesn't bother me too much.",
      "No, I don't care about the arrangement of things."
    ]
  },
  {
    "question": "Do you spend a significant amount of time on repetitive actions or rituals (like washing hands, cleaning, counting)?",
    "answers": [
      "Yes, it takes a lot of time and interferes with my normal life.",
      "Sometimes, but it doesn’t significantly affect my life.",
      "No, I don’t have such habits."
    ]
  },
  {
    "question": "How often do you feel the need to explain to yourself or others the reasons for your actions, even if they seem obvious?",
    "answers": [
      "Yes, everything must have a logical explanation, otherwise, I feel anxiety.",
      "Sometimes, but it’s rare.",
      "No, I don't have such a need."
    ]
  },
  {
    "question": "Do you ever avoid certain situations because you’re afraid you won’t be able to complete your rituals or checks?",
    "answers": [
      "Yes, I avoid such situations because I’m afraid of losing control.",
      "Sometimes, but usually it doesn't affect my life.",
      "No, I don’t avoid situations for such reasons."
    ]
  },
  {
    "question": "Do you understand that some of your thoughts or actions may be excessive, but you still can’t stop yourself?",
    "answers": [
      "Yes, I know it’s irrational, but I can’t help it.",
      "Sometimes, but usually I can control it.",
      "No, I don’t have such problems."
    ]
  },
  {
    "question": "Do you feel that obsessions or compulsions interfere with your daily life (work, studies, relationships)?",
    "answers": [
      "Yes, they take up a lot of time and energy.",
      "Sometimes, but I try to control them.",
      "No, it doesn’t affect my life."
    ]
  },
  {
    "question": "Do you have sudden attacks of intense fear or discomfort that peak within a few minutes?",
    "answers": [
      "Yes, such attacks happen regularly.",
      "I’ve had them a few times, but not often.",
      "No, I haven’t had such attacks."
    ]
  },
  {
    "question": "During panic attacks, do you experience a racing heart, sweating, shaking, or difficulty breathing?",
    "answers": [
      "Yes, almost always.",
      "Sometimes, but not always.",
      "No, I haven’t had such symptoms."
    ]
  },
  {
    "question": "Do you fear losing control of yourself or going crazy during such attacks?",
    "answers": [
      "Yes, this fear is very strong.",
      "Sometimes, but I can control myself.",
      "No, I don’t feel like that."
    ]
  },
  {
    "question": "Do you experience a feeling of being “out of your body” or that the world around you seems unreal during panic attacks?",
    "answers": [
      "Yes, very often.",
      "Sometimes, but it passes quickly.",
      "No, I’ve never felt that way."
    ]
  },
  {
    "question": "Do you avoid certain places or situations because you fear a panic attack might happen there?",
    "answers": [
      "Yes, I avoid such places to prevent an attack.",
      "Sometimes, but not always.",
      "No, I don't avoid places because of the fear of a panic attack."
    ]
  },
  {
    "question": "Do you experience sudden fear of death or the feeling that you’re about to die during such attacks?",
    "answers": [
      "Yes, that’s one of my strongest fears.",
      "Sometimes, but I quickly recover.",
      "No, I don’t feel that way."
    ]
  },
  {
    "question": "How often do you fear that a panic attack may happen again after having experienced one?",
    "answers": [
      "Constantly, it’s a persistent fear.",
      "Sometimes I worry about it, but not always.",
      "No, I don’t think about it beforehand."
    ]
  },
  {
    "question": "Have you ever had panic attacks without obvious reasons, when you weren’t in a stressful situation?",
    "answers": [
      "Yes, they happen suddenly, without any reason.",
      "Sometimes, but usually there is a reason.",
      "No, they only occur in stressful situations."
    ]
  },
  {
    "question": "Do you constantly feel tension or anxiety because you fear that a panic attack might happen at any time?",
    "answers": [
      "Yes, I constantly think about it.",
      "Sometimes I have such thoughts, but I try not to focus on them.",
      "No, I don’t think about it in advance."
    ]
  },
  {
    "question": "Have you ever consulted a doctor or tried methods (breathing exercises, meditation) to cope with panic attacks?",
    "answers": [
      "Yes, I sought help because it’s a serious issue for me.",
      "Sometimes I try to cope on my own, but it doesn’t always work.",
      "No, I haven’t done anything for it."
    ]
  },
  {
    "question": "Do you avoid social situations because of fear of criticism or judgment?",
    "answers": [
      "Yes, I almost always avoid such situations.",
      "Sometimes I feel uncomfortable, but I try not to avoid them.",
      "No, I feel comfortable in social situations."
    ]
  },
  {
    "question": "Do you feel strong discomfort or anxiety when interacting with strangers?",
    "answers": [
      "Yes, it makes me very nervous.",
      "Sometimes I get nervous, but I manage.",
      "No, I easily talk to new people."
    ]
  },
  {
    "question": "Do you worry about how others perceive your appearance or behavior in social settings?",
    "answers": [
      "Yes, I constantly think about it.",
      "Sometimes I worry, but not often.",
      "No, I don’t care about that."
    ]
  },
  {
    "question": "How do you feel before public speaking or speaking up in a group?",
    "answers": [
      "Terrified, I try to avoid it.",
      "Nervous, but I push through.",
      "Comfortable, I have no issues."
    ]
  },
  {
    "question": "Do you experience physical symptoms (blushing, trembling, sweating) in social situations?",
    "answers": [
      "Yes, almost every time.",
      "Sometimes, if it’s important.",
      "No, I don’t experience that."
    ]
  },
  {
    "question": "Do you feel exhausted after social interactions, even if they are brief?",
    "answers": [
      "Yes, socializing drains me.",
      "Sometimes, if there’s a lot of interaction.",
      "No, I’m fine after social events."
    ]
  },
  {
    "question": "Do you often think that people are judging or criticizing you?",
    "answers": [
      "Yes, I frequently feel judged.",
      "Sometimes I think so, but not always.",
      "No, I don’t worry about that."
    ]
  },
  {
    "question": "Do you feel that social anxiety interferes with your work, studies, or relationships?",
    "answers": [
      "Yes, it significantly limits me.",
      "Sometimes it’s bothersome, but not critical.",
      "No, it doesn’t affect me."
    ]
  },
  {
    "question": "Do you experience periods of extremely high energy, reduced need for sleep, and racing thoughts?",
    "answers": [
      "Yes, these happen and last days or weeks.",
      "Occasionally, but they pass quickly.",
      "No, I haven’t experienced that."
    ]
  },
  {
    "question": "Have you ever felt unusually elevated mood and inflated self-esteem?",
    "answers": [
      "Yes, I feel invincible sometimes.",
      "Occasionally, but not often.",
      "No, I haven’t felt that."
    ]
  },
  {
    "question": "Do you experience rapid mood swings from very high to very low in a short period?",
    "answers": [
      "Yes, regularly.",
      "Sometimes, but not drastic.",
      "No, my mood is stable."
    ]
  },
  {
    "question": "Do you engage in impulsive spending or risky behaviors during high-energy periods?",
    "answers": [
      "Yes, it has caused problems.",
      "Sometimes, but not severe.",
      "No, I’m in control of my actions."
    ]
  },
  {
    "question": "Do you have periods of extreme irritability or aggression without clear cause?",
    "answers": [
      "Yes, quite often.",
      "Occasionally, but I manage it.",
      "No, I remain calm."
    ]
  },
  {
    "question": "Do you notice significant changes in appetite or sleep between mood states?",
    "answers": [
      "Yes, my sleep and appetite fluctuate greatly.",
      "Sometimes they change, but not severely.",
      "No, they remain stable."
    ]
  },
  {
    "question": "Do you experience chronic feelings of burnout and lack of motivation?",
    "answers": [
      "Yes, I feel exhausted and indifferent to my work.",
      "Sometimes, but it passes after rest.",
      "No, I remain motivated."
    ]
  },
  {
    "question": "Do you feel your efforts are meaningless and unappreciated?",
    "answers": [
      "Yes, frequently.",
      "Sometimes, but I recognize my achievements.",
      "No, I feel valued."
    ]
  },
  {
    "question": "Do you feel physical exhaustion despite adequate rest?",
    "answers": [
      "Yes, I’m tired every day.",
      "Sometimes, but weekends help.",
      "No, rest restores me."
    ]
  },
  {
    "question": "Do you find it hard to concentrate or make decisions under stress?",
    "answers": [
      "Yes, my focus is impaired.",
      "Sometimes, but I manage.",
      "No, I can concentrate well."
    ]
  },
  {
    "question": "Do you use food restriction, purging, or excessive exercise to control your weight?",
    "answers": [
      "Yes, frequently.",
      "Occasionally, but I try to stop.",
      "No, I don’t engage in these behaviors."
    ]
  },
  {
    "question": "Do you often eat large amounts of food when not physically hungry?",
    "answers": [
      "Yes, especially when stressed.",
      "Sometimes, but rarely.",
      "No, I only eat when I’m hungry."
    ]
  },
  {
    "question": "Do you feel guilt or shame after eating?",
    "answers": [
      "Yes, almost always.",
      "Sometimes, but not strongly.",
      "No, I don’t feel guilty."
    ]
  },
  {
    "question": "Have you ever hidden your eating habits from others?",
    "answers": [
      "Yes, often.",
      "Sometimes, but not usually.",
      "No, I’m open about it."
    ]
  },
  {
    "question": "Do you experience compulsive substance use despite negative consequences?",
    "answers": [
      "Yes, it’s a serious issue.",
      "Sometimes, but I control it.",
      "No, I don’t use substances."
    ]
  },
  {
    "question": "Do you use alcohol or drugs to cope with emotional distress?",
    "answers": [
      "Yes, frequently.",
      "Occasionally, but not excessively.",
      "No, I don’t use substances to cope."
    ]
  },
  {
    "question": "Have you ever thought that life isn’t worth living or considered self-harm?",
    "answers": [
      "Yes, often.",
      "Sometimes, but it passes.",
      "No, never."
    ]
  },
  {
    "question": "Do you experience sudden urges to harm yourself when distressed?",
    "answers": [
      "Yes, repeatedly.",
      "Occasionally, but I resist.",
      "No, I don’t have these urges."
    ]
  },
  {
    "question": "Do you feel overwhelmed by thoughts of self-harm or suicide?",
    "answers": [
      "Yes, frequently.",
      "Sometimes, but briefly.",
      "No, I don’t feel that way."
    ]
  },
  {
    "question": "Have you ever sought professional help for emotional distress or suicidal thoughts?",
    "answers": [
      "Yes, I have reached out.",
      "Once or twice.",
      "No, I haven’t sought help."
    ]
  },
  {
    "question": "Do you believe multiple emotional problems you face are linked and complicate your well-being?",
    "answers": [
      "Yes, several issues overlap.",
      "Some overlap, but manageable.",
      "No, they seem separate."
    ]
  }
]
