import React from 'react'
import { View, Image, Text, Slider, TouchableOpacity, Platform, Alert, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Sound from 'react-native-sound';

const img_speaker = require('./../../Img/resources/ui_speaker.png');
const img_pause = require('./../../Img/resources/ui_pause.png');
const img_play = require('./../../Img/resources/ui_play.png');
export default class FollowInfoAudio extends React.Component {

    static navigationOptions = props => ({
        title: "tesing",
    })

    constructor() {
        super();
        this.state = {
            playState: 'paused', //playing, paused
            playSeconds: 0,
            duration: 0
        }
        this.sliderEditing = false;
    }

    componentDidMount() {

        this.timeout = setInterval(() => {
            if (this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing) {
                this.sound.getCurrentTime((seconds, isPlaying) => {
                    this.setState({ playSeconds: seconds });
                })
            }
        }, 100);
    }
    componentWillUnmount() {
        if (this.sound) {
            this.sound.release();
            this.sound = null;
        }
        if (this.timeout) {
            clearInterval(this.timeout);
        }
    }

    onSliderEditStart = () => {
        this.sliderEditing = true;
    }
    onSliderEditEnd = () => {
        this.sliderEditing = false;
    }
    onSliderEditing = value => {
        if (this.sound) {
            this.sound.setCurrentTime(value);
            this.setState({ playSeconds: value });
        }
    }

    play = async () => {
        if (this.sound) {
            this.sound.play(this.playComplete);
            this.setState({ playState: 'playing' });
        } else {
            const filepath = "https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3";
            var dirpath = '';
            // if (this.props.navigation.state.params.dirpath) {
            dirpath = Sound.MAIN_BUNDLE;
            // }
            console.log('[Play]', filepath);

            this.sound = new Sound(filepath, dirpath, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    Alert.alert('Notice', 'audio file error. (Error code : 1)');
                    this.setState({ playState: 'paused' });
                } else {
                    this.setState({ playState: 'playing', duration: this.sound.getDuration() });
                    this.sound.play(this.playComplete);
                }
            });
        }
    }
    playComplete = (success) => {
        if (this.sound) {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                Alert.alert('Notice', 'audio file error. (Error code : 2)');
            }
            this.setState({ playState: 'paused', playSeconds: 0 });
            this.sound.setCurrentTime(0);
        }
    }

    pause = () => {
        if (this.sound) {
            this.sound.pause();
        }

        this.setState({ playState: 'paused' });
    }

    jumpPrev15Seconds = () => { this.jumpSeconds(-15); }
    jumpNext15Seconds = () => { this.jumpSeconds(15); }
    jumpSeconds = (secsDelta) => {
        if (this.sound) {
            this.sound.getCurrentTime((secs, isPlaying) => {
                let nextSecs = secs + secsDelta;
                if (nextSecs < 0) nextSecs = 0;
                else if (nextSecs > this.state.duration) nextSecs = this.state.duration;
                this.sound.setCurrentTime(nextSecs);
                this.setState({ playSeconds: nextSecs });
            })
        }
    }

    getAudioTimeString(seconds) {
        // const h = parseInt(seconds / (60 * 60));
        const m = parseInt(seconds % (60 * 60) / 60);
        const s = parseInt(seconds % 60);

        return ((m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));
    }


    render() {

        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
        const durationString = this.getAudioTimeString(this.state.duration);

        return (
            <View style={styles._main}>
                <View style={styles._player_header}>
                    <Image source={img_speaker} style={styles._audio_icon_img} />
                    <View>
                        <View style={styles._counter_btn_main}>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <TouchableOpacity style={styles._counter_btn}>
                                    <Text style={styles._counter_btn_text}>+3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles._glass_btn}>
                                    <Image
                                        source={require("./../../Img/coverGlass.png")}
                                        style={styles.active1}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles._save_btn}>
                                <Entypo name="heart" size={25} color="#A3C9FC" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={styles._player_main}>
                            <View >
                                <Slider
                                    onTouchStart={this.onSliderEditStart}
                                    // onTouchMove={() => console.log('onTouchMove')}
                                    onTouchEnd={this.onSliderEditEnd}
                                    // onTouchEndCapture={() => console.log('onTouchEndCapture')}
                                    // onTouchCancel={() => console.log('onTouchCancel')}
                                    onValueChange={this.onSliderEditing}
                                    value={this.state.playSeconds} maximumValue={this.state.duration} maximumTrackTintColor='#4A95FA' minimumTrackTintColor='#FFEB5A' thumbTintColor='#FFEB5A'
                                    style={{ flex: 1, alignSelf: 'center', width: 270, marginHorizontal: Platform.select({ ios: 5 }) }} />
                            </View>
                            <View >
                                {this.state.playState == 'playing' &&
                                    <TouchableOpacity onPress={this.pause} style={styles._play_btn}>
                                        <Image source={img_pause} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>}
                                {this.state.playState == 'paused' &&
                                    <TouchableOpacity onPress={this.play} style={styles._push_btn}>
                                        <Image source={img_play} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    _main: {
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    _player_header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    _audio_icon_img: {
        width: 262,
        height: 258,
        borderRadius: 10
    },
    _save_btn: {
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        marginTop:40
    },
    _back_sound: {
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _play_btn: {
        backgroundColor: "#4A95FA",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    _push_btn: {
        backgroundColor: "#4A95FA",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    _player_main: {
        flexDirection: "row",
        width: "100%"
    },
    _counter_btn_main: {
        alignItems: "center",
        marginTop: 5,
        marginLeft:10
    },
    _counter_btn: {
        backgroundColor: "#EBEBEB",
        width: 50,
        height: 30,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    _counter_btn_text: {
        color: "#535242",
        fontSize: 16,
        fontWeight: "bold",

    },
    _glass_btn: {
        backgroundColor: "#FFE0E7",
        width: 50,
        height: 30,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20
    }
});