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

const defaultInventory = {
    "inventory": {
        "b0be7fae-1c6a-5ddf-b0de-97db7c8afa48": 0,
        "33d7d293-4e0c-5876-8244-ecb8b962e663": 0,
        "daec50d1-1cd9-5128-9b76-03437bd3e813": 0,
        "d4a45ab8-17ac-5741-88cd-a3c1a30adb5f": 0,
        "4980150b-85ee-5591-be5c-1010d91860d1": 0,
        "d2783dae-cd2a-5bf3-94bc-c1c24b2431a1": 0,
        "39ef35d9-6858-5c52-b935-968caeaf4f41": 0,
        "905376cd-17ae-5d4d-9fe6-b60420d72065": 0,
        "83d3df6c-5f06-5c77-a856-3edc8ba5e4d6": 0,
        "46a4e04f-e600-5342-baa1-63bbef6ab7b3": 0,
        "0c825b60-661f-5971-86c0-13a3c55a9e0f": 0,
        "7f1c24c6-1ac2-5a5b-a78a-b883ebc45de4": 0,
        "d19a2420-ce9e-5cc0-a6bb-9382d1cdfc5e": 0,
        "43149088-b9e9-524a-b447-dfdcdaaa49e3": 0,
        "be4f89ab-0cde-5705-9b44-c55fbd00f80f": 0,
        "3553c47c-305f-5559-9af1-31fb00f3941a": 0,
        "89667fb4-ff92-5396-802b-d93b31103d61": 0,
        "db3189ea-6baa-53aa-84f5-208cc135c573": 0,
        "d4c16930-2657-513d-ac0d-b340501b8d10": 0,
        "78e400a8-43e8-58b8-8910-004b2adcc377": 0,
        "ed325e9c-590a-5ee9-a471-0d0e6565a734": 0,
        "242fa84e-3343-544a-9bf5-5927dfd36036": 0,
        "6e73b30e-aca4-5415-8255-b691e643139e": 0,
        "3dd13c1f-7571-542b-8b1a-720d67a439a3": 0,
        "80f12c0c-95d8-5535-81d3-595abadd736b": 0,
        "370f1a88-706f-5e71-9f84-2d698e81110b": 0,
        "d72db4ba-fd03-5f75-a853-facfb0b7fe80": 0,
        "3fca6927-d0f9-55a2-82a5-84ef648740a4": 0,
        "fb81f0ff-6874-5f2b-a3ee-d04cad63f700": 0,
        "8f90dd55-f329-5b89-a58d-b08a283b8739": 0,
        "cbbb5918-921c-5ac1-b5df-32cd1ed5274d": 0,
        "50884d5b-cae3-5d57-b2b3-3117b3ecb6f7": 0,
        "106b5372-692a-5274-b7b9-b2db0a1c8565": 0,
        "4210042c-7a56-5096-8ae0-c0f951283682": 0,
        "5a825afc-f044-500d-84b9-b6fe90fc4dd3": 0,
        "1664129b-5138-5449-80bb-efbe4b9e2b2b": 0,
        "a2bd565b-fe43-501a-b74b-0e12700809c1": 0,
        "b0c49275-1f30-54c2-8447-f7e5f853ed97": 0,
        "2136273d-f112-527f-abaa-49338df72fc9": 0,
        "0d63ae61-3bdd-58d9-871b-3754e999384b": 0,
        "1ec1d7a4-a599-5ed2-8dbc-b768d606b092": 0,
        "6299724a-e05e-55c0-9354-47eb3eb8c8ea": 0,
        "8252b5b4-3155-5a39-a688-f27a0878e68f": 0,
        "97d2e77c-3164-57a4-a956-168633395e3f": 0,
        "5422e0d2-d9d0-5976-970e-95fc3f460f65": 0,
        "0730309a-b639-5fc2-a208-eadfd4a9632a": 0,
        "cc6b5317-71e3-57ca-a41e-ac695183ec1a": 0,
        "965e52e3-6c3c-5ba0-8e59-7e357aebf892": 0,
        "5ebc15e3-d25e-5c1f-bad6-3f5c0e3048f1": 0,
        "3ac9f771-f76f-55d2-9abc-d1be5b207a69": 0,
        "5f5a6672-8feb-57c4-93f3-c04c58579792": 0,
        "2b65e398-8c9b-5038-b565-5c8e9a627ee9": 0,
        "95af4ac7-bfe1-5211-b0b1-0ff0edc7acd9": 0,
        "77b70c38-72af-54b7-a66f-1c58cc9240d1": 0,
        "deca4f06-e3bc-51ef-8618-30d91a1e4019": 0,
        "b3fbc4e7-dfb3-5e51-a37d-7600663c0f7a": 0,
        "d9db5659-866a-5d86-9390-73776e45d478": 0,
        "998c2a58-7c92-5ac0-b6cb-1ad8ce67c36c": 0,
        "22343ef8-88cb-5286-8e6a-7f035f2e4888": 0,
        "0a9820c4-5f15-5e92-a756-7651e55cf468": 0,
        "5b0c5983-d7bd-56eb-9837-46b5e213f34b": 0,
        "898f8a75-a7e2-54b3-a33d-3881439b81a6": 0,
        "468522fc-06f0-5bd7-9ff9-2e4fd398da4c": 0,
        "04bf6050-ec9a-5d61-8557-dd0e7fbde1bb": 0,
        "2686bf4d-bafc-50fb-9b81-0d752f034bcd": 0,
        "c1d36531-9f1e-59f3-b88c-1694961f187a": 0,
        "230047b4-86d1-5d07-9aa6-3b9fe474ac7b": 0,
        "e08c6ca3-a0de-5e38-8b32-3a701b5a08c4": 0,
        "fb2c7561-b819-5375-95ec-d6f385a48594": 0,
        "42811dda-6222-5812-80f2-37b2cebc380c": 0,
        "c83216ff-3935-5e09-8fca-70348f088d5e": 0,
        "62bad3da-25c8-5a15-87cb-2cabc892894a": 0,
        "5972e7af-f80f-5887-b58a-05f865b6d4f0": 0,
        "8b8c0557-71e1-56af-a5a6-abbd76ffbbaa": 0,
        "90b006b8-5e3b-57f8-bca3-f31c19d23947": 0,
        "32f5d5a2-8c28-5fe5-a585-b8387f2cbb9e": 0,
        "7571877f-6ef1-53e8-821e-247d1750bc3d": 0,
        "2a2bf781-a732-50a7-828f-ee1f9c6d2aea": 0,
        "cc25a278-2c3a-5d55-9533-755fa31a17f9": 0,
        "edba1c6a-a338-52e4-b7b9-f1574156a8fd": 0,
        "9d638a55-2a0e-5c4d-bf02-e8fac413f8bb": 0,
        "a888ff95-c79a-5f1c-baaf-ffe2e48d5f0f": 0,
        "5230d5a1-eadc-5c23-99f1-56adc9ed7587": 0,
        "0af9beae-04fa-5449-8032-6fc13e37e05e": 0,
        "64cef0f7-80dd-5d8c-863d-bff94f7b8a19": 0,
        "187b5928-5376-50ec-8458-471bdafc6158": 0,
        "ad3b438d-647e-52e4-ad51-b5493f52fbae": 0,
        "17b12b73-aea3-5616-b995-9a8c860873f0": 0,
        "041b63f9-bda4-55dd-ba26-89bd59d03234": 0,
        "d5d4d583-e196-510f-9593-eb6d0e3d48d2": 0,
        "f168b7db-f686-5a22-ac33-550445ccecd7": 0,
        "e974982c-83e2-52b5-b0c6-224d5f555792": 0,
        "07c5e196-a2a3-58c1-abc8-002625201502": 0,
        "8df2d526-a5c4-5328-9c83-33d8cd2b4375": 0,
        "b6e50173-3fd7-553b-8685-6d55140f3235": 0,
        "17bccb09-d281-5709-95aa-f00d9a3fff22": 0,
        "63958458-a057-5790-97e0-0a02a04109b1": 0,
        "3b8aec9e-da1e-57ef-ac06-783602c43bd2": 0,
        "6d4b585e-3df5-589d-9934-f452b96a05b7": 0,
        "b176b377-58b2-5dfd-afd2-c68bfebacd34": 0,
        "29d176da-4cbd-5c4f-ac25-1ac7623ca786": 0,
        "de53f670-20a3-55be-bc3b-1357035b37a4": 0,
        "da656c84-ae19-5c5a-8969-783183569674": 0,
        "584a0b03-d188-524d-a6b3-0e48c5f4a37a": 0,
        "1be2a1f1-974b-59aa-8409-8a89b2708980": 0,
        "d89169f3-8c30-5568-b19c-a72765928f1d": 0,
        "0d4155f6-3408-5bab-aaab-94d9978ef2c3": 0,
        "d4d32198-d667-5225-8759-0f0db5d5f53a": 0,
        "592863e8-e033-5756-b09d-8b5765f96462": 0,
        "dd7e8e6c-05f1-5870-9b4b-c23b70d93229": 0,
        "37236f9a-2a8d-566a-9efe-d40cb7d83c32": 0,
        "5275d629-59a8-5bf4-b8c2-bad7cf1c9880": 0,
        "42f30419-caad-5b4a-b589-1d5b8ccbb20e": 0,
        "eb0b64b4-3b21-50ff-b69c-4556545c15db": 0,
        "22d5dd7f-80cb-5699-bfa0-555729e58a14": 0,
        "92b94f0c-b423-5636-8529-1a8952a06fa9": 0,
        "0ccb20fe-d396-5461-b809-dc5684588f23": 0,
        "6ece8ea9-398e-5735-9193-a3517cfc7644": 0,
        "48f970ea-ea39-5d8d-8d54-297a686b4cae": 0,
        "0ada9d81-8aba-5713-b317-bfaea5b94c05": 0,
        "57acc6c7-d1d9-5a8d-a567-64174dd194f2": 0,
        "0a93b502-e83a-57ba-b380-440cd493394e": 0,
        "8fe88422-f999-587f-ac1a-7bc8b53037f5": 0,
        "c18ab043-4ca2-5094-aedd-2aa3901e531a": 0,
        "2f6ffc36-88a4-5384-8507-2ffdff781b51": 0,
        "44fc57fd-4cc1-58f4-b5d9-ce280616f398": 0,
        "f10ff1e2-6f0d-5c11-92e8-061981a339ea": 0,
        "849066c4-ab47-570b-8037-cf11eb98b320": 0,
        "793452ac-ab1a-52f4-b31c-54671b798dfe": 0,
        "9e0ef26f-aa1d-5c0c-922c-0149df5240de": 0,
        "1d952f2a-beaa-5aa2-9ea8-be8beea7f716": 0,
        "b371db3f-4c2f-57a8-a5f3-d331d2ed598c": 0,
        "a803cc5f-894a-5c0c-9f23-cab384e0eabc": 0,
        "43c9eaca-d143-5672-bd2e-a2dcc6ee162d": 0,
        "30cf37cd-195a-50c7-af77-3b5a1f35d5f1": 0,
        "2102dfed-59ae-546e-a97c-4145f3a90492": 0,
        "163c54a2-7471-501b-8499-d07c2388e175": 0,
        "8e1da17d-1b23-5027-b8c8-7369dbac5d88": 0,
        "a27481c7-25a9-5142-9dbb-ca4c1a7aff6f": 0,
        "f613474c-025f-5395-89ce-589c534cdd1f": 0,
        "fa2a4836-e7fe-5c9e-8954-990fdf2b2040": 0,
        "20d61ef2-b29b-5052-8627-23f1c5b4b925": 0,
        "6f17054f-33bb-5f5f-8da0-092ba48c5521": 0,
        "30b4b018-7857-5f6f-8d10-be9c184f1587": 0,
        "73a1b767-ad4c-5408-ba38-5b3e6b89686f": 0,
        "0ac1a6d3-bb30-5a21-953a-39468e778498": 0,
        "f6099561-b5ce-5e5f-8d2b-84cdbdc6a28a": 0,
        "5a3f570b-2b8d-5764-b064-57c937ec201e": 0,
        "ea3ce6d9-e936-575d-baf2-8de418d0be6f": 0,
        "29635386-c7a8-5ef3-b521-e7495cfe688d": 0,
        "e25ee521-4fa0-5aa3-a4e4-6b12da2d911a": 0,
        "2b622baf-286a-59be-91a9-b2733b9af0da": 0,
        "a9fed9d5-dd9b-5be1-828a-d1776ea765f9": 0,
        "ad46b2e6-9c19-59d5-b15e-1fbca2f4c363": 0,
        "3c5fe307-265c-52c4-86f4-140e21c08c37": 0,
        "d796ab1e-8834-5f90-940e-d060181e4db2": 0,
        "bad56cad-513f-5d0d-af22-fee2ec070369": 0,
        "9d3df626-d393-5009-9f32-16a1cff0b267": 0,
        "96ba0b3c-e980-5ffd-85b3-41053fc11f9c": 0,
        "92634890-8e4a-59d8-8254-76b7a03f0296": 0,
        "be9a6919-8258-5865-90fe-808e4f4d498e": 0,
        "b8e699d2-56ae-5116-882e-b16be7ddc4e3": 0,
        "ced6ae47-08b4-5733-89f3-8d83046f8d36": 0,
        "0cdd8987-6277-594d-bffa-1f92c9aa8d8b": 0,
        "9e01ddcc-4f86-5885-a23d-d2951392d452": 0,
        "0db3f3e8-cef1-50d3-af75-818dcefb35cf": 0,
        "17d3ff47-0f74-5340-959c-d594ff8fc70e": 0,
        "61a29180-3b3f-516c-94d0-a2a3f921bb1a": 0,
        "e5f42b33-2231-50b6-9cef-171b219305f9": 0,
        "ae0dee2f-4667-5911-bbbf-dd92d0e394da": 0,
        "2375517d-779c-5cb2-a649-9fedcbbeed8f": 0,
        "155f1451-3402-51d4-a6ce-4a931d90e329": 0,
        "2dea863b-958d-5e49-9599-b9c6bbdea9e2": 0,
        "7eea9626-a613-5f62-9abb-58caccef11df": 0,
        "10641885-ac66-51b8-bd3b-629aa0c5626c": 0,
        "5d7f72ef-26d6-5e32-a9fd-65596c901d83": 0,
        "298ff904-0621-5c6f-bd8c-fba9b85330c5": 0,
        "e13c5037-6070-5c30-bb9e-f6b66150df87": 0,
        "e20f67fb-c695-58ad-a4bb-ae32b582da47": 0,
        "58fd4343-7ff5-506e-854c-4c88f8ef3aa7": 0,
        "cd73aa76-7cad-5452-9062-ef7c98f97048": 0,
        "bd8806db-35e3-5119-8ea5-72566b4b99c9": 0,
        "eab0edf8-1f75-5884-b626-277945112734": 0,
        "29091256-d940-5267-8848-37300953126d": 0,
        "7cad85bf-3f6e-5c41-bdcb-ac0a40e80a08": 0,
        "53f20659-b66b-58b0-b4c8-15f2ec92dba0": 0,
        "19536151-1bb1-5468-8f12-40faa062770c": 0,
        "30094b66-8a7b-5439-8d7f-a420959d3b14": 0,
        "303e0bb9-6884-5d08-95b7-dc9a953e3e2e": 0,
        "90bcf491-756a-5771-9d49-b290f3e86ea6": 0,
        "c363c0de-6b2c-5036-8a38-755638c20af7": 0,
        "a82f2b24-f8ca-5b68-880e-3becec1fcf76": 0,
        "2a64ee0b-9e0e-5e7a-a430-5b1922ba687d": 0,
        "6b6dcbb0-7f9d-564e-926a-f2ec53e91ebd": 0,
        "06665c23-862a-5470-81da-1e83edb1cfd9": 0,
        "832bbb47-3a84-594e-8baa-8d3fec47a61b": 0,
        "39b67c98-58c5-5dbe-8d43-5980f2c0dafe": 0,
        "c2f0911c-837e-5867-898b-9a2e678ff55f": 0,
        "eef0b77b-92e4-54f5-9ff8-f6eb449be87d": 0,
        "4df702f1-31c2-54ad-accb-a46602c7e7c4": 0,
        "c89233dc-d60f-5e04-97de-6a254bbc24eb": 0,
        "55dc08e8-7bd8-57f4-aa50-df4a12fc9f78": 0,
        "e9d29b33-5186-5abd-b377-71849795a9ba": 0,
        "098bcb39-486b-559a-bc7e-8cac8fbed123": 0,
        "25bd3605-4988-589f-b65a-4ecd60b90e90": 0,
        "f8f8230a-9ad7-55bd-a03f-cfe0e923f1eb": 0,
        "485f598f-e875-5e24-b184-3b3800eaec29": 0,
        "a037be91-f119-56e0-bab7-bcf0e1d0a880": 0,
        "85bc6f3c-2e82-59fc-8dcc-a0288400f5ec": 0,
        "15cec100-69f4-5985-8f6e-8c4bd21f8223": 0,
        "a0fd3e26-b2ab-5230-b34a-3427dca4652f": 0,
        "efd4446d-36c4-52bc-a91c-d01d0fe8ae76": 0,
        "b46071b9-5a2f-5bc1-a43b-ea833cd14032": 0,
        "42275279-8193-5f8a-8360-68632accabdc": 0
    }
}

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
async function hashUuid(value, secret) {
  if (!secret) {
    throw new Error("Missing UUID_HASH secret");
  }

  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    {
      name: "HMAC",
      hash: "SHA-256"
    },
    false,
    ["sign"]
  );

  const digest = new Uint8Array(
    await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(value)
    )
  );

  digest[6] = (digest[6] & 0x0f) | 0x40;
  digest[8] = (digest[8] & 0x3f) | 0x80;

  const hex = Array.from(
    digest.slice(0, 16),
    byte => byte.toString(16).padStart(2, "0")
  ).join("");

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32)
  ].join("-");
}
__name(hashUuid, "hashUuid");
async function handleGet(request, env, url, path) {
  if (path === "" || path === "/" || path === "index.html") {
    // for users going to this domain
    return Response.redirect("https://kiwifruitdev.com/arkhamrevived/", 301);
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
    // just returning the token because the token we provided was our uuid
    const uuid = getBearerUUID(request);
    if (!uuid) {
      return json({ error: "unauthorized" }, 401);
    }
    return json({
      user_id: uuid
    });
  }
  if (path === "/users/me/inventory") {
    const uuid = getBearerUUID(request);
    let inventory = await env.INVENTORIES.get(uuid);
    if (!inventory) {
      inventory = JSON.stringify(defaultInventory);
    }
    return new Response(inventory, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const wbnetMatch = path.match(/^\/users\/(.*)\/wbnet$/);
  if (wbnetMatch) {
    return new Response(await loadStatic(env, "user-wbnet.json"), {
      headers: { "Content-Type": "application/json" }
    });
  }
  const profileMatch = path.match(/^\/users\/(.*)\/profile\/private$/);
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
    // all uuids go through a hash (cloudflare worker secret runtime variable named UUID_HASH)
    // all uuids will be repeatable (not random-based at all)
    const body = await parseRequestBody(request);
    const grantType = body.grant_type || "";
    let sourceUuid;
    let platform;
    if (grantType === "http://ns.fireteam.net/oauth2/grant-type/steam/encrypted_app_ticket") {
      // on pc (Form item: "grant_type" = "http://ns.fireteam.net/oauth2/grant-type/steam/encrypted_app_ticket")
      // the HTTP Authorization header is set to Basic MDkzOGFhN2EtNjY4Mi00YjkwLWE5N2QtOTBiZWNiZGRiOWNlOkdYbk5RYVJTdXhheGxtNnVSMzVIVmszOXU=
      // that base64 string is converted to 0938aa7a-6682-4b90-a97d-90becbddb9ce:GXnNQaRSuxaxlm6uR35HVk39u
      // 0938aa7a-6682-4b90-a97d-90becbddb9ce is our uuid
      platform = "pc";
      const authorization = request.headers.get("authorization") || "";
      const match = authorization.match(/^Basic\s+(.+)$/i);

      if (!match) {
        return json({ error: "invalid_client" }, 401);
      }

      let decoded;
      try {
        decoded = atob(match[1]);
      } catch {
        return json({ error: "invalid_client" }, 401);
      }

      const separator = decoded.indexOf(":");
      if (separator <= 0) {
        return json({ error: "invalid_client" }, 401);
      }

      sourceUuid = decoded.slice(0, separator);

      if (!/^[0-9a-fA-F-]{36}$/.test(sourceUuid)) {
        return json({ error: "invalid_client" }, 401);
      }
    } else if (grantType === "http://ns.fireteam.net/oauth2/grant-type/psn") {
      // on ps3 (Form item: "grant_type" = "http://ns.fireteam.net/oauth2/grant-type/psn")
      // get ticket (Form item: "ticket" = "IQEAAAAAAPAwAACkAAgAFIw7vuxB8ZaDzw4H3hdHbsSdkVyqAAEABAAAAQAABwAIAAABoM8hPf4ABwAIAAABoNRHmGgAAgAIdRM3K2UaDNMABAAgS2l3aWZydWl0RGV2AAAAAAAAAAAAAAAAAAAAAAAAAAAACAAEdXMAAQAEAARiNwAAAAgAGFVQMTAxOC1CTFVTMzExNDdfMDAAAA)
      // that base64 decodes into a binary, at offset 3F is the PSN username until a null byte (00)
      // turn that PSN name into a uuid
      platform = "ps3";
      if (typeof body.ticket !== "string" || !body.ticket) {
        return json({ error: "invalid_request1" }, 400);
      }

      let ticket;
      let binary;

      try {
        let encoded = body.ticket
          .replace(/-/g, "+")
          .replace(/_/g, "/");

        encoded += "=".repeat((4 - encoded.length % 4) % 4);

        binary = atob(encoded);
      } catch (err) {
        return json({
          error: "base64_decode_failed",
          message: err instanceof Error ? err.message : String(err),
          name: err instanceof Error ? err.name : typeof err
        }, 400);
      }

      try {
        ticket = Uint8Array.from(
          binary,
          char => char.charCodeAt(0)
        );
      } catch (err) {
        return json({
          error: "binary_conversion_failed",
          message: err instanceof Error ? err.message : String(err),
          name: err instanceof Error ? err.name : typeof err
        }, 400);
      }

      const usernameOffset = 0x54;

      if (ticket.length <= usernameOffset) {
        return json({ error: "invalid_request3" }, 400);
      }

      const end = ticket.indexOf(0, usernameOffset);

      const usernameBytes = ticket.slice(
        usernameOffset,
        end === -1 ? ticket.length : end
      );

      if (usernameBytes.length === 0) {
        return json({ error: "invalid_request4" }, 400);
      }

      try {
        sourceUuid = new TextDecoder("utf-8", {
          fatal: true
        }).decode(usernameBytes);
      } catch {
        return json({ error: "invalid_request5" }, 400);
      }

      if (sourceUuid.length > 64) {
        return json({ error: "invalid_request6" }, 400);
      }
    } else {
      // assuming xbox?
      // xbox is not yet implemented so it outputs a 0 uuid
      platform = "xbox";
      sourceUuid = "00000000-0000-0000-0000-000000000000";
      const authorization = request.headers.get("authorization") || "";
      console.log(`xbox user? ${authorization}`)
    }

    const uuid = platform + "_" + sourceUuid + "_" + (await hashUuid(sourceUuid, env.UUID_HASH));

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
  if (path === "/actions/arbitrate") {
    //const uuid = getBearerUUID(request);
    const body = await parseRequestBody(request);
    console.log(body);
    return json(
      {
        action_id: "0",
        arbitration_id: "1",
        id: "2",
        response: "3",
        arbitration: "4",
        arbitrate: "5",
      },
      200
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
  const profileMatch = path.match(/^\/users\/(.*)\/profile\/private$/);
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
