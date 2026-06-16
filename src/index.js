// GET:
// - /files/netvars.dat -> static: netvars.ini
// - /motd -> static: motd.json
// - /store/catalog/general -> static: catalog.json
// - /store/offers?vendor=[0 or 4] -> static: 0 is store.json and 4 is credits.json
// - /users/me -> get "Bearer <uuid>" in authorization header return json {"user_id": "<uuid>"}
// - /users/me/inventory -> static: inventory.json
// - /users/[uuid]/wbnet -> static: user-wbnet.json
// - /users/[uuid]/profile/private -> pull save data from kv using uuid or use defaultprofile.json if it doesn't exist
// POST:
// - /auth/token -> "ticket" in body (remove all underscores and dashes) turn it into a consistent uuid and return json {"token_type": "bearer","access_token": "<uuid>","expires_in": 1000000,"refresh_token": ""};
// - /store/vouchers/transactions -> "voucher_id" in body return json {"transaction_id": "<sent voucher id>"} code 201
// - /store/purchases/transactions -> "offer_id" in body return json {"transaction_id": "<sent offer id>"} code 201
// PUT:
// - /store/vouchers/[transactionid] -> unimplemented
// - /store/purchases/[transactionid] -> unimplemented
// - /users/me/wbnet -> static: user-wbnet.json
// - /users/[uuid]/profile/private -> validate that body contains "\"MobileUnlock_Earth2DarkKnightAlt\": true," and is less than 45,000 characters long and if so then add to kv always return code 204

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

const defaultProfile = {
    "data": {
        "ControllerSensitivity": 60,
        "GameDifficulty": "Normal",
        "AutoAim": false,
        "AutoCenter": false,
        "MovementControl": "Left Thumbstick",
        "YInversion": false,
        "Subtitles": true,
        "Tutorial": true,
        "Hints": true,
        "Gamma": 50,
        "VolumeSFX": 100,
        "VolumeMusic": 100,
        "VolumeDialogue": 100,
        "InvertRotation": false,
        "InvertGlide": true,
        "InvertBatarang": false,
        "ControllerVibration": true,
        "CameraAssist": true,
        "AccountXP": 0,
        "AccountXPForPrevUpgrade": 0,
        "AccountXPForNextUpgrade": 1000,
        "AccountXPLevel": 28,
        "EquippedWeapon1": "Shotgun_01",
        "EquippedWeapon2": "AssaultRifle_01",
        "ForceEquipGoldenShotgun": true,
        "ForceEquipRifle": true,
        "jokerXP": 0,
        "jokerXPForPrevUpgrade": 0,
        "jokerXPForNextUpgrade": 1000,
        "jokerXPLevel": 28,
        "baneXP": 0,
        "baneXPForPrevUpgrade": 0,
        "baneXPForNextUpgrade": 1000,
        "baneXPLevel": 28,
        "CustomizationProfileData": {
            "CustomProfileVersion": 1,
            "CustomConfigBanks": [
                {
                    "m_CustomSelection": [
                        {
                            "ArchetypeID": "Archetype_Ratface_Joker",
                            "LowerID": "Joker_Pants_01",
                            "UpperID": "Joker_Upper_07",
                            "FaceGearID": "None",
                            "HairID": "Joker_Hair_01",
                            "FacialHairID": "None",
                            "FacePaintID": "Joker_FacePaint_01",
                            "TattooID": "None",
                            "UndershirtID": "Joker_Tshirt_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": true,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_Ratface_Joker",
                            "LowerID": "Joker_Pants_01",
                            "UpperID": "Joker_Upper_07",
                            "FaceGearID": "None",
                            "HairID": "Joker_Hair_01",
                            "FacialHairID": "None",
                            "FacePaintID": "Joker_FacePaint_01",
                            "TattooID": "None",
                            "UndershirtID": "Joker_Tshirt_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": true,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_Ratface_Joker",
                            "LowerID": "Joker_Pants_01",
                            "UpperID": "Joker_Upper_07",
                            "FaceGearID": "None",
                            "HairID": "Joker_Hair_01",
                            "FacialHairID": "None",
                            "FacePaintID": "Joker_FacePaint_01",
                            "TattooID": "None",
                            "UndershirtID": "Joker_Tshirt_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": true,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_Ratface_Joker",
                            "LowerID": "Joker_Pants_01",
                            "UpperID": "Joker_Upper_07",
                            "FaceGearID": "None",
                            "HairID": "Joker_Hair_01",
                            "FacialHairID": "None",
                            "FacePaintID": "Joker_FacePaint_01",
                            "TattooID": "None",
                            "UndershirtID": "Joker_Tshirt_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": true,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_Ratface_Joker",
                            "LowerID": "Joker_Pants_01",
                            "UpperID": "Joker_Upper_07",
                            "FaceGearID": "None",
                            "HairID": "Joker_Hair_01",
                            "FacialHairID": "None",
                            "FacePaintID": "Joker_FacePaint_01",
                            "TattooID": "None",
                            "UndershirtID": "Joker_Tshirt_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 54,
                                "G": 163,
                                "R": 111,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": true,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        }
                    ]
                },
                {
                    "m_CustomSelection": [
                        {
                            "ArchetypeID": "Archetype_NewBeef_Bane",
                            "LowerID": "Bane_Pants_01",
                            "UpperID": "None",
                            "FaceGearID": "None",
                            "HairID": "Bane_Hair_02",
                            "FacialHairID": "FacialHair_07",
                            "FacePaintID": "None",
                            "TattooID": "None",
                            "UndershirtID": "Bane_Jumper_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": false,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_NewBeef_Bane",
                            "LowerID": "Bane_Pants_01",
                            "UpperID": "None",
                            "FaceGearID": "None",
                            "HairID": "Bane_Hair_02",
                            "FacialHairID": "FacialHair_07",
                            "FacePaintID": "None",
                            "TattooID": "None",
                            "UndershirtID": "Bane_Jumper_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": false,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_NewBeef_Bane",
                            "LowerID": "Bane_Pants_01",
                            "UpperID": "None",
                            "FaceGearID": "None",
                            "HairID": "Bane_Hair_02",
                            "FacialHairID": "FacialHair_07",
                            "FacePaintID": "None",
                            "TattooID": "None",
                            "UndershirtID": "Bane_Jumper_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": false,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_NewBeef_Bane",
                            "LowerID": "Bane_Pants_01",
                            "UpperID": "None",
                            "FaceGearID": "None",
                            "HairID": "Bane_Hair_02",
                            "FacialHairID": "FacialHair_07",
                            "FacePaintID": "None",
                            "TattooID": "None",
                            "UndershirtID": "Bane_Jumper_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": false,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        },
                        {
                            "ArchetypeID": "Archetype_NewBeef_Bane",
                            "LowerID": "Bane_Pants_01",
                            "UpperID": "None",
                            "FaceGearID": "None",
                            "HairID": "Bane_Hair_02",
                            "FacialHairID": "FacialHair_07",
                            "FacePaintID": "None",
                            "TattooID": "None",
                            "UndershirtID": "Bane_Jumper_01",
                            "LowerSkinIdx": -1,
                            "UpperSkinIdx": -1,
                            "FaceGearSkinIdx": -1,
                            "HairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "FacialHairColor": {
                                "B": 35,
                                "G": 39,
                                "R": 39,
                                "A": 255
                            },
                            "bArchetypeIsGearPlus": false,
                            "bFaceGearIsGearPlus": false,
                            "bFacePaintIsGearPlus": false,
                            "bFacialHairIsGearPlus": false,
                            "bHairIsGearPlus": false,
                            "bLowerIsGearPlus": true,
                            "bTattooIsGearPlus": false,
                            "bUndershirtIsGearPlus": true,
                            "bUpperIsGearPlus": false
                        }
                    ]
                }
            ],
            "CurrentSelectedCustomizationBank": [
                0,
                0
            ],
            "LocalCharAltMeshIndex": [
                4,
                4
            ]
        },
        "PrestigeLevel": 0,
        "PrestigeWeapon": 0,
        "L0Team": 2,
        "L0Weap": 0,
        "L0PadL": 24,
        "L0PadR": 24,
        "L0char": 0,
        "L1Team": 1,
        "L1Weap": 0,
        "L1PadL": 24,
        "L1PadR": 24,
        "L1char": 0,
        "PreferredFaction": 0,
        "WeaponAutoSwitch": true,
        "LoadoutData": {
            "TeamData": [
                {
                    "Bank": [
                        {
                            "RelevantTeam": 1,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                16,
                                2,
                                25,
                                25,
                                18,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 1,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                16,
                                2,
                                25,
                                25,
                                18,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 1,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                16,
                                2,
                                25,
                                25,
                                18,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 1,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                16,
                                2,
                                25,
                                25,
                                18,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 1,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                16,
                                2,
                                25,
                                25,
                                18,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        }
                    ]
                },
                {
                    "Bank": [
                        {
                            "RelevantTeam": 2,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                17,
                                2,
                                25,
                                25,
                                22,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 2,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                17,
                                2,
                                25,
                                25,
                                22,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 2,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                17,
                                2,
                                25,
                                25,
                                22,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 2,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                17,
                                2,
                                25,
                                25,
                                22,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        {
                            "RelevantTeam": 2,
                            "EquippedWeapon": 7,
                            "WeaponSkinIdx": 0,
                            "UnboundGadgets": [
                                14,
                                19,
                                13
                            ],
                            "DpadGadgets": [
                                9,
                                25,
                                17,
                                2,
                                25,
                                25,
                                22,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                25
                            ],
                            "QuickGadgets": [
                                25,
                                25,
                                25,
                                25,
                                25,
                                25,
                                12
                            ],
                            "DpadGadgetsUpgradeIdx": [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        }
                    ]
                }
            ],
            "CurrentTeamBank": [
                0,
                0
            ]
        },
        "LoadoutDataVersion": 4,
        "ControlType": 0,
        "LeftyFlip": false,
        "TriggerFlip": false,
        "ThugXAxisSens": 0.5,
        "ThugYAxisSens": 0.5,
        "RoundsSinceHero": -1,
        "HeroOptOut": false,
        "MapRoundWin_Chemplant_Bane": false,
        "MapRoundWin_Chemplant_Joker": false,
        "MapRoundWin_Chemplant_Hero": false,
        "MapRoundWin_Blackgate_Bane": false,
        "MapRoundWin_Blackgate_Joker": false,
        "MapRoundWin_Blackgate_Hero": false,
        "MapRoundWin_Funhouse_Bane": false,
        "MapRoundWin_Funhouse_Joker": false,
        "MapRoundWin_Funhouse_Hero": false,
        "MapRoundWin_RobotFactory_Bane": false,
        "MapRoundWin_RobotFactory_Joker": false,
        "MapRoundWin_RobotFactory_Hero": false,
        "HeroKillsOnElites": 0,
        "EliteKillsOnHeroes": 0,
        "FirstBoot": true,
        "IPOTutorialVideo_Watched": false,
        "HHTutorialVideo_Watched": false,
        "LastModified": "2030.08.07-20.35.13",
        "UseSixaxisControls": false,
        "RecentUnlocks": {
            "BaneTeamRecentUnlocks": {
                "AppearanceRecentUnlocks": {}
            },
            "JokerTeamRecentUnlocks": {
                "AppearanceRecentUnlocks": {}
            },
            "WatchedVideoList": [
            ],
            "NumVideos": 0
        },
        "JokerIndoc1Video_Watched": false,
        "JokerIndoc2Video_Watched": false,
        "BaneIndoc1Video_Watched": false,
        "BaneIndoc2Video_Watched": false,
        "MatchmakingDataVersion": 5,
        "MatchmakingData": {
            "m_MaxHistoricalMatches": 100,
            "m_RandomInitialValue": 1,
            "MaxHistoricalBandwidthValues": 10
        },
        "SkippedWBIDPrompt": true,
        "WeaponScores": {
            "WeaponScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "MaxLifetimeWeaponScore": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        },
        "WeaponCache_Satchel1": true,
        "WeaponCache_Case1": true,
        "WeaponCache_Case2": true,
        "WeaponCache_Crate1": true,
        "WeaponCache_Crate2": true,
        "WeaponCache_Container1": true,
        "SPSkin_New52Graphic": true,
        "SPSkin_Noel": true,
        "SPSkin_DarkKnight": true,
        "GotWBIDBonus": true,
        "SkipWBIDLinkage": true,
        "WBIDPrivacyGuid1": 1,
        "SPSkin_RedSon": true,
        "MPSkin_BlackestNight": true,
        "WBIDPrivacyGuid2": 1,
        "WBIDPrivacyGuid3": 1,
        "WBIDPrivacyGuid4": 1,
        "WeaponCache_Satchel1_Redeemed": true,
        "WeaponCache_Case1_Redeemed": true,
        "WeaponCache_Case2_Redeemed": true,
        "WeaponCache_Crate1_Redeemed": true,
        "WeaponCache_Crate2_Redeemed": true,
        "WeaponCache_Container1_Redeemed": true,
        "SPTrophyRobin": true,
        "MobileUnlock_Tier_0_1": true,
        "MobileUnlock_Tier_0_1_Redeemed": true,
        "MobileUnlock_Tier_0_2": true,
        "MobileUnlock_Tier_0_2_Redeemed": true,
        "MobileUnlock_Tier_0_3": true,
        "MobileUnlock_Tier_0_3_Redeemed": true,
        "MobileUnlock_Tier_0_4": true,
        "MobileUnlock_Tier_0_4_Redeemed": true,
        "MobileUnlock_Tier_0_5": true,
        "MobileUnlock_Tier_0_5_Redeemed": true,
        "MobileUnlock_Tier_0_6": true,
        "MobileUnlock_Tier_0_6_Redeemed": true,
        "MobileUnlock_Tier_0_7": true,
        "MobileUnlock_Tier_0_7_Redeemed": true,
        "MobileUnlock_Tier_1_1": true,
        "MobileUnlock_Tier_1_1_Redeemed": true,
        "MobileUnlock_Tier_1_2": true,
        "MobileUnlock_Tier_1_2_Redeemed": true,
        "MobileUnlock_Tier_1_3": true,
        "MobileUnlock_Tier_1_3_Redeemed": true,
        "MobileUnlock_Tier_2_1": true,
        "MobileUnlock_Tier_2_1_Redeemed": true,
        "MobileUnlock_Tier_2_2": true,
        "MobileUnlock_Tier_2_2_Redeemed": true,
        "MobileUnlock_Tier_2_3": true,
        "MobileUnlock_Tier_2_3_Redeemed": true,
        "MobileUnlock_Tier_3_1": true,
        "MobileUnlock_Tier_3_1_Redeemed": true,
        "MobileUnlock_Tier_4_1": true,
        "MobileUnlock_Tier_4_1_Redeemed": true,
        "MobileUnlock_Earth2DarkKnightAlt": true,
        "MouseSens": 30,
        "VoiceChat": true,
        "PushToTalk": false
    }
};

// src/index.js
var index_default = {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;
      switch (request.method) {
        case "GET":
          return handleGet(request, env, url, path);
        case "POST":
          return handlePost(request, env, url, path);
        case "PUT":
          return handlePut(request, env, url, path);
        default:
          return new Response("", { status: 405 });
      }
    } catch (e) {
      console.error(e);
      return json({ error: "internal_server_error" }, 500);
    }
  }
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
__name(json, "json");
async function loadStatic(env, filename) {
  const response = await env.ASSETS.fetch(
    `https://assets.local/${filename}`
  );
  if (!response.ok) {
    throw new Error(`Missing asset: ${filename}`);
  }
  return response.text();
}
__name(loadStatic, "loadStatic");
function getBearerUUID(request) {
  const auth = request.headers.get("authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : null;
}
__name(getBearerUUID, "getBearerUUID");
async function parseRequestBody(request) {
  const contentType = (request.headers.get("content-type") || "").toLowerCase();
  if (contentType.includes("application/json")) {
    return request.json();
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const text = await request.text();
    return Object.fromEntries(new URLSearchParams(text));
  }
  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const result = {};
    for (const [key, value] of formData.entries()) {
      result[key] = value;
    }
    return result;
  }
  return {};
}
__name(parseRequestBody, "parseRequestBody");
async function ticketToUUID(ticket) {
  const normalized = ticket.replace(/[_-]/g, "");
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(normalized)
  );
  const bytes = Array.from(new Uint8Array(hash));
  const hex = bytes.slice(0, 16).map((b) => b.toString(16).padStart(2, "0")).join("");
  return [
    hex.substring(0, 8),
    hex.substring(8, 12),
    hex.substring(12, 16),
    hex.substring(16, 20),
    hex.substring(20, 32)
  ].join("-");
}
__name(ticketToUUID, "ticketToUUID");
async function handleGet(request, env, url, path) {
  if (path === "" || path === "/" || path === "index.html") {
    return new Response("Hello World!");
  }
  if (path === "/files/netvars.dat") {
    const content = await loadStatic(env, "netvars.ini");
    const base64 = btoa(content);
    return json({ data: base64 });
  }
  if (path === "/motd") {
    return new Response(await loadStatic(env, "motd.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path === "/store/catalog/general") {
    return new Response(await loadStatic(env, "catalog.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path === "/store/offers") {
    const vendor = url.searchParams.get("vendor");
    if (vendor === "4") {
      return new Response(await loadStatic(env, "credits.json"), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(await loadStatic(env, "store.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  if (path === "/users/me") {
    const uuid = getBearerUUID(request);
    if (!uuid) {
      return json({ error: "unauthorized" }, 401);
    }
    return json({
      user_id: uuid
    });
  }
  if (path === "/users/me/inventory") {
    return new Response(await loadStatic(env, "inventory.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  const wbnetMatch = path.match(/^\/users\/([0-9a-fA-F-]+)\/wbnet$/);
  if (wbnetMatch) {
    return new Response(await loadStatic(env, "user-wbnet.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  const profileMatch = path.match(/^\/users\/([0-9a-fA-F-]+)\/profile\/private$/);
  if (profileMatch) {
    const uuid = profileMatch[1];
    let profile = await env.PROFILES.get(uuid);
    if (!profile) {
      profile = JSON.stringify(defaultProfile); //await loadStatic(env, "user-profile-default.json");
    }
    return new Response(profile, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return new Response("", { status: 404 });
}
__name(handleGet, "handleGet");
async function handlePost(request, env, url, path) {
  if (path === "/auth/token") {
    const body = await parseRequestBody(request);
    const uuid = await ticketToUUID(body.ticket || "");
    return json({
      token_type: "bearer",
      access_token: uuid,
      expires_in: 1e6,
      refresh_token: ""
    });
  }
  if (path === "/store/vouchers/transactions") {
    const body = await parseRequestBody(request);
    return json(
      {
        transaction_id: body.voucher_id
      },
      201
    );
  }
  if (path === "/store/purchases/transactions") {
    const body = await parseRequestBody(request);
    return json(
      {
        transaction_id: body.offer_id
      },
      201
    );
  }
  return new Response("", { status: 404 });
}
__name(handlePost, "handlePost");
async function handlePut(request, env, url, path) {
  const voucherMatch = path.match(/^\/store\/vouchers\/([^/]+)$/);
  if (voucherMatch) {
    return new Response("", { status: 501 });
  }
  const purchaseMatch = path.match(/^\/store\/purchases\/([^/]+)$/);
  if (purchaseMatch) {
    return new Response("", { status: 501 });
  }
  if (path === "/users/me/wbnet") {
    return new Response(await loadStatic(env, "user-wbnet.json"), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const profileMatch = path.match(/^\/users\/([0-9a-fA-F-]+)\/profile\/private$/);
  if (profileMatch) {
    const uuid = profileMatch[1];
    const body = await request.text();
    if (body.length > 45e3) {
      console.log(`Too long body sent by user ${uuid}`)
      return new Response("", { status: 204 });
    }
    if (!body.includes(
      '"MobileUnlock_Earth2DarkKnightAlt"'
    )) {
      console.log(`Uninitialized JSON sent by user ${uuid}`)
      return new Response("", { status: 204 });
    }
    await env.PROFILES.put(uuid, body);
    return new Response("", {
      status: 204
    });
  }
  return new Response("", { status: 404 });
}
__name(handlePut, "handlePut");
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
